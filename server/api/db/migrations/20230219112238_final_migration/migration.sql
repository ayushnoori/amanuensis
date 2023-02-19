/*
  Warnings:

  - You are about to drop the `WorkflowPrompt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WorkflowPrompt";

-- CreateTable
CREATE TABLE "Allergies" (
    "id" TEXT NOT NULL,
    "start" DATE,
    "stop" BOOLEAN,
    "patient" TEXT,
    "encounter" TEXT,
    "code" INTEGER,
    "system" TEXT,
    "description" TEXT,
    "type" TEXT,
    "category" TEXT,
    "reaction1" INTEGER,
    "description1" TEXT,
    "severity1" TEXT,
    "reaction2" INTEGER,
    "description2" TEXT,
    "severity2" TEXT,

    CONSTRAINT "Allergies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarePlans" (
    "id" TEXT NOT NULL,
    "start" DATE,
    "stop" DATE,
    "patient" TEXT,
    "encounter" TEXT,
    "code" INTEGER,
    "description" TEXT,
    "reasonCode" INTEGER,
    "reasonDescription" TEXT,

    CONSTRAINT "CarePlans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claims" (
    "id" TEXT NOT NULL,
    "patient" TEXT,
    "provider" TEXT,
    "primaryPatientInsuranceId" TEXT,
    "secondaryPatientInsuranceId" TEXT,
    "departmentId" INTEGER,
    "patientDepartmentId" INTEGER,
    "diagnosis1" BIGINT,
    "diagnosis2" BIGINT,
    "diagnosis3" BIGINT,
    "diagnosis4" BIGINT,
    "diagnosis5" BOOLEAN,
    "diagnosis6" BOOLEAN,
    "diagnosis7" BOOLEAN,
    "diagnosis8" BOOLEAN,
    "referringProviderId" TEXT,
    "appointmentId" TEXT,
    "currentIllnessDate" TIMESTAMPTZ(6),
    "serviceDate" TIMESTAMPTZ(6),
    "supervisingProviderId" TEXT,
    "status1" TEXT,
    "status2" TEXT,
    "statusp" TEXT,
    "outstanding1" INTEGER,
    "outstanding2" INTEGER,
    "outstandingP" INTEGER,
    "lastBilledDate1" TIMESTAMPTZ(6),
    "lastBilledDate2" TIMESTAMPTZ(6),
    "lastBilledDateP" TIMESTAMPTZ(6),
    "healthcareClaimTypeId1" INTEGER,
    "healthcareClaimTypeId2" INTEGER,

    CONSTRAINT "Claims_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClaimsTransactions" (
    "id" TEXT NOT NULL,
    "claimId" TEXT,
    "chargeId" INTEGER,
    "patient" TEXT,
    "type" TEXT,
    "amount" DOUBLE PRECISION,
    "method" TEXT,
    "fromDate" TIMESTAMPTZ(6),
    "toDate" TIMESTAMPTZ(6),
    "placeOfService" TEXT,
    "procedureCode" BIGINT,
    "modifier1" BOOLEAN,
    "modifier2" BOOLEAN,
    "diagnosisRef1" INTEGER,
    "diagnosisRef2" INTEGER,
    "diagnosisRef3" INTEGER,
    "diagnosisRef4" INTEGER,
    "units" INTEGER,
    "departmentId" INTEGER,
    "notes" TEXT,
    "unitAmount" DOUBLE PRECISION,
    "transferOutId" INTEGER,
    "transferType" TEXT,
    "payments" DOUBLE PRECISION,
    "adjustments" DOUBLE PRECISION,
    "transfers" DOUBLE PRECISION,
    "outstanding" DOUBLE PRECISION,
    "appointmentId" TEXT,
    "lineNote" BOOLEAN,
    "patientInsuranceId" TEXT,
    "feeScheduleId" INTEGER,
    "provider" TEXT,
    "supervisingProviderId" TEXT,

    CONSTRAINT "ClaimsTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conditions" (
    "id" TEXT NOT NULL,
    "start" DATE,
    "stop" DATE,
    "patient" TEXT,
    "encounter" TEXT,
    "code" BIGINT,
    "description" TEXT,

    CONSTRAINT "Conditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devices" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMPTZ(6),
    "stop" TIMESTAMPTZ(6),
    "patient" TEXT,
    "encounter" TEXT,
    "code" INTEGER,
    "description" TEXT,
    "udi" TEXT,

    CONSTRAINT "Devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encounters" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMPTZ(6),
    "stop" TIMESTAMPTZ(6),
    "patient" TEXT,
    "organization" TEXT,
    "provider" TEXT,
    "payer" TEXT,
    "encounterClass" TEXT,
    "code" BIGINT,
    "description" TEXT,
    "baseEncounterCost" DOUBLE PRECISION,
    "totalClaimCost" DOUBLE PRECISION,
    "payerCoverage" DOUBLE PRECISION,
    "reasonCode" BIGINT,
    "reasonDescription" TEXT,

    CONSTRAINT "Encounters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagingStudies" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMPTZ(6),
    "patient" TEXT,
    "encounter" TEXT,
    "seriesUid" TEXT,
    "bodySiteCode" INTEGER,
    "bodySiteDescription" TEXT,
    "modalityCode" TEXT,
    "modalityDescription" TEXT,
    "instanceUid" TEXT,
    "sopCode" TEXT,
    "sopDescription" TEXT,
    "procedureCode" INTEGER,

    CONSTRAINT "ImagingStudies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Immunizations" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMPTZ(6),
    "patient" TEXT,
    "encounter" TEXT,
    "code" INTEGER,
    "description" TEXT,
    "baseCost" DOUBLE PRECISION,

    CONSTRAINT "Immunizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMPTZ(6),
    "stop" TIMESTAMPTZ(6),
    "patient" TEXT,
    "payer" TEXT,
    "encounter" TEXT,
    "code" INTEGER,
    "description" TEXT,
    "baseCost" DOUBLE PRECISION,
    "payerCoverage" DOUBLE PRECISION,
    "dispenses" INTEGER,
    "totalCost" DOUBLE PRECISION,
    "reasonCode" INTEGER,
    "reasonDescription" TEXT,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Observations" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMPTZ(6),
    "patient" TEXT,
    "encounter" TEXT,
    "category" TEXT,
    "code" TEXT,
    "description" TEXT,
    "value" TEXT,
    "units" TEXT,
    "type" TEXT,

    CONSTRAINT "Observations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organizations" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" INTEGER,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,
    "phone" TEXT,
    "revenue" DOUBLE PRECISION,
    "utilization" INTEGER,

    CONSTRAINT "Organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patients" (
    "id" TEXT NOT NULL,
    "birthDate" DATE,
    "deathDate" BOOLEAN,
    "ssn" TEXT,
    "drivers" TEXT,
    "passport" TEXT,
    "prefix" TEXT,
    "first" TEXT,
    "last" TEXT,
    "suffix" BOOLEAN,
    "maiden" TEXT,
    "marital" TEXT,
    "race" TEXT,
    "ethnicity" TEXT,
    "gender" TEXT,
    "birthPlace" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "county" TEXT,
    "fips" INTEGER,
    "zip" INTEGER,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,
    "healthcareExpenses" DOUBLE PRECISION,
    "healthcareCoverage" DOUBLE PRECISION,
    "income" INTEGER,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayerTransitions" (
    "id" TEXT NOT NULL,
    "patient" TEXT,
    "memberId" TEXT,
    "startDate" TIMESTAMPTZ(6),
    "endDate" TIMESTAMPTZ(6),
    "payer" TEXT,
    "secondaryPayer" TEXT,
    "planOwnership" TEXT,
    "ownerName" TEXT,

    CONSTRAINT "PayerTransitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payers" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "ownership" TEXT,
    "address" BOOLEAN,
    "city" BOOLEAN,
    "stateHeadquartered" BOOLEAN,
    "zip" BOOLEAN,
    "phone" BOOLEAN,
    "amountCovered" DOUBLE PRECISION,
    "amountUncovered" DOUBLE PRECISION,
    "revenue" DOUBLE PRECISION,
    "coveredEncounters" INTEGER,
    "uncoveredEncounters" INTEGER,
    "coveredMedications" INTEGER,
    "uncoveredMedications" INTEGER,
    "coveredProcedures" INTEGER,
    "uncoveredProcedures" INTEGER,
    "coveredImmunizations" INTEGER,
    "uncoveredImmunizations" INTEGER,
    "uniqueCustomers" INTEGER,
    "qolsAvg" DOUBLE PRECISION,
    "memberMonths" INTEGER,

    CONSTRAINT "Payers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Procedures" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMPTZ(6),
    "stop" TIMESTAMPTZ(6),
    "patient" TEXT,
    "encounter" TEXT,
    "code" BIGINT,
    "description" TEXT,
    "baseCost" DOUBLE PRECISION,
    "reasonCode" INTEGER,
    "reasonDescription" TEXT,

    CONSTRAINT "Procedures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Providers" (
    "id" TEXT NOT NULL,
    "organization" TEXT,
    "name" TEXT,
    "gender" TEXT,
    "speciality" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" INTEGER,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,
    "encounters" INTEGER,
    "procedures" INTEGER,

    CONSTRAINT "Providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplies" (
    "id" TEXT NOT NULL,
    "date" DATE,
    "patient" TEXT,
    "encounter" TEXT,
    "code" INTEGER,
    "description" TEXT,
    "quantity" INTEGER,

    CONSTRAINT "Supplies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkflowPrompts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,

    CONSTRAINT "WorkflowPrompts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientQuestion" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT,
    "askedAt" TIMESTAMP(3) NOT NULL,
    "answeredAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PatientQuestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Allergies" ADD CONSTRAINT "Allergies_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarePlans" ADD CONSTRAINT "CarePlans_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarePlans" ADD CONSTRAINT "CarePlans_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_primaryPatientInsuranceId_fkey" FOREIGN KEY ("primaryPatientInsuranceId") REFERENCES "Payers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_provider_fkey" FOREIGN KEY ("provider") REFERENCES "Providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_referringProviderId_fkey" FOREIGN KEY ("referringProviderId") REFERENCES "Providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_secondaryPatientInsuranceId_fkey" FOREIGN KEY ("secondaryPatientInsuranceId") REFERENCES "Payers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_supervisingProviderId_fkey" FOREIGN KEY ("supervisingProviderId") REFERENCES "Providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClaimsTransactions" ADD CONSTRAINT "ClaimsTransactions_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClaimsTransactions" ADD CONSTRAINT "ClaimsTransactions_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "Claims"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClaimsTransactions" ADD CONSTRAINT "ClaimsTransactions_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClaimsTransactions" ADD CONSTRAINT "ClaimsTransactions_placeOfService_fkey" FOREIGN KEY ("placeOfService") REFERENCES "Organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClaimsTransactions" ADD CONSTRAINT "ClaimsTransactions_provider_fkey" FOREIGN KEY ("provider") REFERENCES "Providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClaimsTransactions" ADD CONSTRAINT "ClaimsTransactions_supervisingProviderId_fkey" FOREIGN KEY ("supervisingProviderId") REFERENCES "Providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Conditions" ADD CONSTRAINT "Conditions_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Conditions" ADD CONSTRAINT "Conditions_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Encounters" ADD CONSTRAINT "Encounters_organization_fkey" FOREIGN KEY ("organization") REFERENCES "Organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Encounters" ADD CONSTRAINT "Encounters_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Encounters" ADD CONSTRAINT "Encounters_payer_fkey" FOREIGN KEY ("payer") REFERENCES "Payers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Encounters" ADD CONSTRAINT "Encounters_provider_fkey" FOREIGN KEY ("provider") REFERENCES "Providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ImagingStudies" ADD CONSTRAINT "ImagingStudies_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ImagingStudies" ADD CONSTRAINT "ImagingStudies_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Immunizations" ADD CONSTRAINT "Immunizations_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Immunizations" ADD CONSTRAINT "Immunizations_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "Medications_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "Medications_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "Medications_payer_fkey" FOREIGN KEY ("payer") REFERENCES "Payers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Observations" ADD CONSTRAINT "Observations_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Observations" ADD CONSTRAINT "Observations_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PayerTransitions" ADD CONSTRAINT "PayerTransitions_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PayerTransitions" ADD CONSTRAINT "PayerTransitions_payer_fkey" FOREIGN KEY ("payer") REFERENCES "Payers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PayerTransitions" ADD CONSTRAINT "PayerTransitions_secondaryPayer_fkey" FOREIGN KEY ("secondaryPayer") REFERENCES "Payers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Procedures" ADD CONSTRAINT "Procedures_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Procedures" ADD CONSTRAINT "Procedures_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Providers" ADD CONSTRAINT "Providers_organization_fkey" FOREIGN KEY ("organization") REFERENCES "Organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Supplies" ADD CONSTRAINT "Supplies_encounter_fkey" FOREIGN KEY ("encounter") REFERENCES "Encounters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Supplies" ADD CONSTRAINT "Supplies_patient_fkey" FOREIGN KEY ("patient") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PatientQuestion" ADD CONSTRAINT "PatientQuestion_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
