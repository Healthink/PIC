<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-diagnoses-icd-table">The diagnoses_icd table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Contains ICD diagnoses for patients, most notably ICD-10 diagnoses.</p>

<p><strong>Number of rows:</strong> 13,970</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>D_ICD_DIAGNOSES on <code>ICD10_CODE_CN</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>The ICD codes are generated for billing purposes at the end of the hospital stay.</li>
<li>All ICD codes in PIC are ICD-10 based.</li>
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
<td>SEQ_NUM</td>
<td>INT</td>
</tr>

<tr>
<td>ICD10_CODE_CN</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient and <code>HADM_ID</code> is unique to a patient hospital stay.</p>

<h2 id="seq-num"><code>SEQ_NUM</code></h2>

<p><code>SEQ_NUM</code> provides the order in which the ICD diagnoses relate to the patient. ICD diagnoses are ordered by priority - and the order does have an impact on the reimbursement for treatment.</p>

<h2 id="icd10-code"><code>ICD10_CODE_CN</code></h2>

<p><code>ICD10_CODE_CN</code> contains the actual code corresponding to the diagnosis assigned to the patient for the given row.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-diagnoses-icd-table">The diagnoses_icd table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#seq-num"><code>SEQ_NUM</code></a></li>
<li><a href="#icd10-code"><code>ICD10_CODE_CN</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>
