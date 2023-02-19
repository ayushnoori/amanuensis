<img src='https://user-images.githubusercontent.com/43010710/219844570-3b4ff1c1-0bec-4009-a7b1-0c73eedf5789.png' width="500"/>


# About

AI-enabled physician assistant for automated clinical transcription, summarization, and EHR form filling. Project for [TreeHacks 2023](https://www.treehacks.com/) at Stanford University.

# Base Dependencies

First, create a new Anaconda environment. For example:
```
conda create --name amanuensis python=3.10
```

Then, install:
* [R](https://www.r-project.org/), tested with version == 4.2.1.
* [Python](https://www.python.org), tested with version == 3.10.9.

# Synthetic Patient Data

Generate synthetic patient data with [Synthea<sup>TM</sup>](https://synthetichealth.github.io/synthea/). 

Synthea<sup>TM</sup> requires Java 11 or newer. First, install the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/).

Next, clone the Synthea<sup>TM</sup> repo, then build and run the test suite:

```python
git clone https://github.com/synthetichealth/synthea.git
cd synthea
./gradlew build check test
```

In the `synthea` directory, modify `./src/main/resources/synthea.properties`. Set `exporter.csv.export` and `generate.only_alive_patients = true`. Output will then be generated in `./src/output/csv`.

Again in the `synthea` directory, use the following command to generate the desired number of patients. The parameters are as follows:
* `-p`: number of patients.
* `-s`: random seed.
* `-a`: patient age range.

```bash
./run_synthea -p 20 -s 42 -a 0-100
```

As specified in the Synthea<sup>TM</sup> wiki, the CSV exporter will generate the following files. The CSV file data dictionary is specified [here](https://github.com/synthetichealth/synthea/wiki/CSV-File-Data-Dictionary).

| File | Description |
|------|-------------|
| `allergies.csv` | Patient allergy data. |
| `careplans.csv` | Patient care plan data, including goals. |
| `claims.csv` | Patient claim data. |
| `claims_transactions.csv` | Transactions per line item per claim. |
| `conditions.csv` | Patient conditions or diagnoses. |
| `devices.csv` | Patient-affixed permanent and semi-permanent devices. |
| `encounters.csv` | Patient encounter data. |
| `imaging_studies.csv` | Patient imaging metadata. |
| `immunizations.csv` | Patient immunization data. |
| `medications.csv` | Patient medication data. |
| `observations.csv` | Patient observations including vital signs and lab reports. |
| `organizations.csv` | Provider organizations including hospitals. |
| `patients.csv` | Patient demographic data. |
| `payer_transitions.csv` | Payer Transition data (i.e. changes in health insurance). |
| `payers.csv` | Payer organization data. |
| `procedures.csv` | Patient procedure data including surgeries. |
| `providers.csv` | Clinicians that provide patient care. |
| `supplies.csv` | Supplies used in the provision of care. |

Copy the generated files from `synthea/src/output/csv` to `amanuensis/patient_data`.

# PostgreSQL Database

Next, construct the PostgreSQL database using `code/construct_database.Rmd`. Run the following command in Terminal to install PostgreSQL.
```bash
brew install postgres
```

Check the version of PostgreSQL as follows.
```bash
psql --version
```

To start PostgreSQL, run the following command.
```bash
brew services start postgresql@14
```

To stop PostgreSQL, run the following command.
```bash
brew services stop postgresql@14
```

Open the `psql` interactive terminal, which is designed to work with the PostgreSQL database.
```bash
psql postgres
```

Create a new database called `amanuensis`. List all users and databases.
```bash
CREATE DATABASE amanuensis;
\du
\l
```

Next, run the code in `code/construct_database.Rmd` to write the synthetic patient data (originally in CSV format) to the newly-created PostgreSQL database. Note that the keys must be specified according to the [CSV file data dictionary](https://github.com/synthetichealth/synthea/wiki/CSV-File-Data-Dictionary).

After constructing the PostgreSQL database, in the `psql` terminal, connect to the `amanuensis` database. List all tables in the database.
```bash
\c amanuensis;
\d
```

# BioGPT
For inference, we can also use the [BioGPT: Generative Pre-trained Transformer for Biomedical Text Generation and Mining](https://academic.oup.com/bib/advance-article/doi/10.1093/bib/bbac409/6713511?guestAccessKey=a66d9b5d-4f83-4017-bb52-405815c907b9) model by Luo *et al.*, 2022. Thus, the dependencies mirror those of [microsoft/BioGPT](https://github.com/microsoft/BioGPT) commit [f186d88](https://github.com/microsoft/BioGPT/commit/f186d88c43c8e7f984285c96d194045ce0e269c6). These include:

* [PyTorch](https://pytorch.org/) version == 1.13.1.
* [transformers](https://huggingface.co/docs/transformers/index), which provides APIs and tools to easily download and train state-of-the-art pretrained models. 

## Non-Hugging Face Usage
Alternatively, BioGPT can be used without Hugging Face 🤗 by installing the below dependencies. See the [BioGPT installation instructions](https://github.com/microsoft/BioGPT) for more information.
* [`fairseq`](https://github.com/facebookresearch/fairseq), tested with version == 0.12.0. Install as follows:

``` bash
git clone https://github.com/pytorch/fairseq
cd fairseq
git checkout v0.12.0
pip install .
python setup.py build_ext --inplace
cd ..
```
* Moses, install as follows:
``` bash
git clone https://github.com/moses-smt/mosesdecoder.git
export MOSES=${PWD}/mosesdecoder
```
* fastBPE, install as follows:
``` bash
git clone https://github.com/glample/fastBPE.git
export FASTBPE=${PWD}/fastBPE
cd fastBPE
g++ -std=c++11 -pthread -O3 fastBPE/main.cc -IfastBPE -o fast
```
* `sacremoses`, install as follows:
``` bash
pip install sacremoses
```
* `sklearn`, install as follows:
``` bash
pip install scikit-learn
```

Remember to set the environment variables `MOSES` and `FASTBPE` to the path of Moses and fastBPE respectively, as they will be required later. According to the [conda documentation](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html#setting-environment-variables), Inside of a conda environment, environment variables can be viewed as follows:
```bash
conda env config vars list
conda env config vars set MOSES=${PWD}/mosesdecoder
conda env config vars set FASTBPE=${PWD}/fastBPE
conda activate amanuensis
```
Then, run the following.
```python
import torch
from fairseq.models.transformer_lm import TransformerLanguageModel

m = TransformerLanguageModel.from_pretrained(
        "checkpoints/Pre-trained-BioGPT", 
        "checkpoint.pt", 
        "data",
        tokenizer='moses', 
        bpe='fastbpe', 
        bpe_codes="data/bpecodes",
        min_len=100,
        max_len_b=1024)

# m.cuda()
src_tokens = m.encode("The patient presents with a history of fever and abdominal cramps for the last 24 hours.")
generate = m.generate([src_tokens], beam=5)[0]
output = m.decode(generate[0]["tokens"])
print(output)
```

# Developers
* [Ayush Noori](mailto:anoori@college.harvard.edu)
* [Iñaki Arango](mailto:inakiarango@college.harvard.edu)
* [Addea Gupta](mailto:addeagupta@college.harvard.edu)
* [Smriti Somasundaram](mailto:smritisomasundaram@college.harvard.edu)