<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="patient-level-data-subject-id">Patient level data: <code>SUBJECT_ID</code></h1>

<p>The following is a list of static data available in the database for <code>SUBJECT_ID</code> in the PATIENTS table:</p>

<ul>
<li>GENDER</li>
<li>DOB</li>
<li>DOD</li>
</ul>

<p>This list contains all the static data available for a single patient.</p>

<h1 id="hospital-level-data-hadm-id">Hospital level data: <code>HADM_ID</code></h1>

<p>The following tables were sourced from the hospital database, and contain information recorded in the hospital.</p>

<ul>
<li>ADMISSIONS</li>
<li>CHARTEVENTS</li>
<li>DIAGNOSES_ICD</li>
<li>EMR_SYMPTOMS</li>
<li>LABEVENTS</li>
<li>MICROBIOLOGYEVENTS</li>
<li>OR_EXAM_REPORTS</li>
<li>OUTPUTEVENTS</li>
<li>PATIENTS</li>
<li>PRESCRIPTIONS</li>
<li>SURGERY_VITAL_SIGNS</li>
</ul>

<p>The following is a list of static data available in the database for <code>HADM_ID</code> in the ADMISSIONS table. This data is constant for a single hospital admission.</p>

<ul>
<li><code>ADMITTIME</code> - The hospital admission time</li>
<li><code>DISCHTIME</code> - The hospital discharge time</li>
<li><code>DEATHTIME</code> - The date of death of the patient if they died within the hospital</li>
<li><code>ADMISSION_LOCATION</code> - The department of the patient in hospital admission</li>
<li><code>DISCHARGE_LOCATION</code> - The department of the patient in hospital discharge</li>
<li><code>INSURANCE</code> - The patient’s type of medical insurance</li>
<li><code>LANGUAGE</code> - The patient’s primary language</li>
<li><code>RELIGION</code> - The patient’s stated religion</li>
<li><code>MARITAL_STATUS</code> - The patient’s marital status</li>
<li><code>ETHNICITY</code> - The patient’s stated ethnicity</li>
<li><code>DIAGNOSIS</code> - A short description of the reason for the patient’s admission</li>
</ul>

<h1 id="icu-level-data-icustay-id">ICU level data: <code>ICUSTAY_ID</code></h1>

<p>The following is a list of static data available in the database for <code>ICUSTAY_ID</code> in the ICUSTAYS table:</p>

<ul>
<li><code>FIRST_CAREUNIT</code> - The first unit that cared for the patient</li>
<li><code>LAST_CAREUNIT</code> - The last care unit that cared for the patient</li>
<li><code>FIRST_WARDID</code> - An integer representing the first physical location of the patient</li>
<li><code>LAST_WARDID</code> - An integer representing the last physical location of the patient</li>
<li><code>INTIME</code> - Time entered the ICU</li>
<li><code>OUTTIME</code> - Time left the ICU</li>
<li><code>LOS</code> - The patient’s ICU length of stay</li>
</ul>


</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#patient-level-data-subject-id">Patient level data: <code>SUBJECT_ID</code></a></li>
<li><a href="#hospital-level-data-hadm-id">Hospital level data: <code>HADM_ID</code></a></li>
<li><a href="#icu-level-data-icustay-id">ICU level data: <code>ICUSTAY_ID</code></a></li>
</ul>
</nav>
</div>


                    </div>
</template>