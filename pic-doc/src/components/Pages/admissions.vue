<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-admissions-table">The admissions table</h1>

<p><strong>Table source:</strong> Hospital databases.</p>

<p><strong>Table purpose:</strong> Define a patient’s hospital admission, HADM_ID.</p>

<p><strong>Number of rows:</strong> 13,449</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>D_ICD_DIAGNOSES on <code>ICD10_CODE_CN</code></li>
</ul>

<h1 id="brief-summary">Brief summary</h1>

<p>The ADMISSIONS table gives information regarding a patient’s admission to the hospital. Since each unique hospital visit for a patient is assigned a unique <code>HADM_ID</code>, the ADMISSIONS table can be considered as a definition table for <code>HADM_ID</code>. Information available includes timing information for admission and discharge, demographic information, the source of the admission, and so on.</p>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>The data is sourced from the admission, discharge and transfer database from the hospital (often referred to as ‘ADT’ data).</li>
<li>All text data, except for that in the <code>DIAGNOSIS</code> column, is stored in English character.</li>
</ul>

<h1 id="table-columns">Table columns</h1>

<table>
<thead>
<tr>
<th>Name</th>
<th>Data type</th>
</tr>
</thead>

<tbody>
<tr>
<td>ROW_ID</td>
<td>INT</td>
</tr>

<tr>
<td>SUBJECT_ID</td>
<td>INT</td>
</tr>

<tr>
<td>HADM_ID</td>
<td>INT</td>
</tr>

<tr>
<td>ADMITTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>DISCHTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>DEATHTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>ADMISSION_LOCATION</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DISCHARGE_LOCATION</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>INSURANCE</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>LANGUAGE</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>RELIGION</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>MARITAL_STATUS</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>ETHNICITY</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>EDREGTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>EDOUTTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>DIAGNOSIS</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>ICD10_CODE_CN </td>
<td>VARCHAR</td>
</tr>
<tr>
<td>HOSPITAL_EXPIRE_FLAG</td>
<td>INT</td>
</tr>

<tr>
<td>HAS_CHARTEVENTS_DATA</td>
<td>INT</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed description</h1>

<p>The <code>ADMISSIONS</code> table defines all <code>HADM_ID</code> present in the database, covering an admission period between 14 November 2010 and 3 April 2019.</p>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Each row of this table contains a unique <code>HADM_ID</code>, which represents a single patient’s admission to the hospital. <code>HADM_ID</code> ranges from 100000 - 115032. It is possible for this table to have duplicate <code>SUBJECT_ID</code>, indicating that a single patient had multiple admissions to the hospital. The ADMISSIONS table can be linked to the PATIENTS table using <code>SUBJECT_ID</code>.</p>

<h2 id="admittime-dischtime-deathtime"><code>ADMITTIME</code>, <code>DISCHTIME</code>, <code>DEATHTIME</code></h2>

<p><code>ADMITTIME</code> provides the date and time the patient was admitted to the hospital, while <code>DISCHTIME</code> provides the date and time the patient was discharged from the hospital. If applicable, <code>DEATHTIME</code> provides the time of in-hospital death for the patient. Note that <code>DEATHTIME</code> is only present if the patient died in-hospital, and is almost always the same as the patient’s <code>DISCHTIME</code>. However, there can be some discrepancies due to typographical errors.</p>

<h2 id="admission-location-discharge"><code>ADMISSION_LOCATION</code>, <code>DISCHARGE_LOCATION</code></h2>

<p><code>ADMISSION_LOCATION</code>,<code>DISCHARGE_LOCATION</code> provide information about the departments of the patient admitted to or discharged from the hospital.
<h2 id="insurance-language-religion-marital-status-ethnicity"><code>INSURANCE</code>, <code>LANGUAGE</code>, <code>RELIGION</code>, <code>MARITAL_STATUS</code>, <code>ETHNICITY</code></h2>

<p>The <code>INSURANCE</code>, <code>LANGUAGE</code>, <code>RELIGION</code>, <code>MARITAL_STATUS</code>, <code>ETHNICITY</code> columns describe patient demographics. These columns occur in the ADMISSIONS table as they are originally sourced from the admission, discharge, and transfers (ADT) data from the hospital database. The values occasionally change between hospital admissions (<code>HADM_ID</code>) for a single patient (<code>SUBJECT_ID</code>). This is reasonable for some fields (e.g. <code>MARITAL_STATUS</code>, <code>RELIGION</code>), but less reasonable for others (e.g. <code>ETHNICITY</code>).</p>

<h2 id="edregtime-edouttime"><code>EDREGTIME</code>, <code>EDOUTTIME</code></h2>

<p>Time that the patient was registered and discharged from the emergency department.</p>

<h2 id="diagnosis-icd10"><code>DIAGNOSIS</code>, <code>ICD10_CODE_CN</code></h2>

<p>The <code>DIAGNOSIS</code> column provides a preliminary, free text diagnosis for the patient on hospital admission. The diagnosis of Chinese characters is mapped to the <code>ICD10_CODE_CN</code> and usually assigned by the admitting clinician. As of PIC v1.0 there were 1120 distinct diagnoses for 15,033 admissions. Final diagnoses for hospital admissions are coded and can be found in the DIAGNOSES_ICD table.</p>

<h2 id="hospital-expire-flag"><code>HOSPITAL_EXPIRE_FLAG</code></h2>

<p>This indicates whether the patient died within the given hospitalization. <code>1</code> indicates death in the hospital, and <code>0</code> indicates survival to hospital discharge.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-admissions-table">The admissions table</a></li>
<li><a href="#brief-summary">Brief summary</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#admittime-dischtime-deathtime"><code>ADMITTIME</code>, <code>DISCHTIME</code>, <code>DEATHTIME</code></a></li>
<li><a href="#admission-type"><code>ADMISSION_TYPE</code></a></li>
<li><a href="#admission-location-discharge"><code>ADMISSION_LOCATION</code>, <code>DISCHARGE_LOCATION</code></a></li>
<li><a href="#insurance-language-religion-marital-status-ethnicity"><code>INSURANCE</code>, <code>LANGUAGE</code>, <code>RELIGION</code>,
<code>MARITAL_STATUS</code>, <code>ETHNICITY</code></a></li>
<li><a href="#edregtime-edouttime"><code>EDREGTIME</code>, <code>EDOUTTIME</code></a></li>
<li><a href="#diagnosis-icd10"><code>DIAGNOSIS</code>, <code>ICD10_CODE_CN</code></a></li>
<li><a href="#hospital-expire-flag"><code>HOSPITAL_EXPIRE_FLAG</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>
