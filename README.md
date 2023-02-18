<img src='https://user-images.githubusercontent.com/43010710/219844570-3b4ff1c1-0bec-4009-a7b1-0c73eedf5789.png' width="500"/>


# About

AI-enabled physician assistant for automated clinical transcription, summarization, and EHR form filling. Project for [TreeHacks 2023](https://www.treehacks.com/) at Stanford University.

# Dependencies

First, create a new Anaconda environment. For example:
```
conda create --name amanuensis python=3.10
```

## BioGPT Dependencies
For inference, we use the [BioGPT: Generative Pre-trained Transformer for Biomedical Text Generation and Mining](https://academic.oup.com/bib/advance-article/doi/10.1093/bib/bbac409/6713511?guestAccessKey=a66d9b5d-4f83-4017-bb52-405815c907b9) model by Luo *et al.*, 2022. Thus, the dependencies mirror those of [microsoft/BioGPT](https://github.com/microsoft/BioGPT) commit [f186d88](https://github.com/microsoft/BioGPT/commit/f186d88c43c8e7f984285c96d194045ce0e269c6). These include:

* [Python](https://www.python.org), tested with version == 3.10.9.
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