<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="overview-of-the-pmimic-data">Overview of the PIC data</h1>

<p>PIC is a relational database containing tables of data relating to pediatric patients (aged 0-18 years) who stayed within the intensive care units at the Children's Hospital, Zhejiang University School of Medicine. A table is a data storage structure which is similar to a spreadsheet: each column contains consistent information (e.g., patient identifiers), and each row contains an instantiation of that information (e.g. a row could contain the integer 340 in the patient identifier column which would imply that the row’s patient identifier is 340).</p>

<p>The tables are linked by identifiers which usually have the suffix “ID”. For example <code>HADM_ID</code> refers to a unique hospital admission and <code>SUBJECT_ID</code> refers to a unique patient. One exception is <code>ROW_ID</code>, which is simply a row identifier unique to that table.</p>

<p>Tables pre-fixed with “D_” are dictionaries and provide definitions for identifiers. For example, every row of OUTPUTEVENTS is associated with a single <code>ITEMID</code> which represents the concept measured, but it does <em>not</em> contain the actual name of the drug. By joining OUTPUTEVENTS and D_ITEMS on <code>ITEMID</code>, it is possible to identify what concept a given <code>ITEMID</code> represents.</p>

<h2 id="list-of-tables">List of tables</h2>

<p>The following tables are used to define and track patient stays:</p>

<ul>
<li><strong>ADMISSIONS</strong>: Every unique hospitalization for each patient in the database (defines <code>HADM_ID</code>)</li>
<li><strong>ICUSTAYS</strong>: Every unique ICU stay in the database (defines <code>ICUSTAY_ID</code>)</li>
<li><strong>PATIENTS</strong>: Every unique patient in the database (defines <code>SUBJECT_ID</code>)</li>
</ul>

<p>Each <code>ICUSTAY_ID</code> corresponds to a single <code>HADM_ID</code> and a single <code>SUBJECT_ID</code>. Each <code>HADM_ID</code> corresponds to a single <code>SUBJECT_ID</code>. A single <code>SUBJECT_ID</code> can correspond to multiple <code>HADM_ID</code> (multiple hospitalizations of the same patient), and multiple <code>ICUSTAY_ID</code> (multiple ICU stays either within the same hospitalization, or across multiple hospitalizations, or both).</p>

<p>The following tables contain data collected in the hospital record system:</p>

<ul>
<li><strong>CHARTEVENTS</strong>: All charted observations for patients</li>
<li><strong>DIAGNOSES_ICD</strong>: Hospital assigned diagnoses, coded using the International Statistical Classification of Diseases and Related Health Problems, 10th (ICD-10) system</li>
<li><strong>EMR_SYMPTOMS</strong>: Structured symptoms extracted from notes regarding the patient's stay</li>
<li><strong>LABEVENTS</strong>: Laboratory measurements for patients in the hospital</li>
<li><strong>MICROBIOLOGYEVENTS</strong>: Microbiology measurements and sensitivities from the hospital database</li>
<li><strong>OR_EXAM_REPORTS</strong>: Records of all examinations (including X-rays, CT, MRI and so on) performed during the patient's stay</li>
<li><strong>OUTPUTEVENTS</strong>: Output information for patients in the hospital</li>
<li><strong>PRESCRIPTIONS</strong>: Medications ordered, and not necessarily administered, for a given patient</li>

</ul>

<p>The following table contain data collected in the operating room:</p>

<ul>
<li><strong>SURGERY_VITAL_SIGNS</strong>: Vital signs recoded while a patient is present in the operating room (data point per 5 minute)</li>

</ul>

<p>The following tables are dictionaries:</p>

<ul>
<li><strong>D_ICD_DIAGNOSES</strong>: Dictionary of International Statistical Classification of Diseases and Related Health Problems (ICD) codes relating to diagnoses</li>
<li><strong>D_ITEMS</strong>: Dictionary of <code>ITEMID</code>s appearing in the MIMIC database, except those that relate to laboratory tests</li>
<li><strong>D_LABITEMS</strong>: Dictionary of <code>ITEMID</code>s in the laboratory database that relate to laboratory tests</li>
</ul>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#overview-of-the-pmimic-data">Overview of the PIC data</a>
<ul>
<li><a href="#list-of-tables">List of tables</a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>
