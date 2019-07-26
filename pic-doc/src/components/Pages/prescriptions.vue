<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-prescriptions-table">The prescriptions table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Contains medication related order entries, i.e. prescriptions.</p>

<p><strong>Number of rows:</strong> 1,512,902</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>ICUSTAYS on <code>ICUSTAY_ID</code></li>
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
<td>ICUSTAY_ID</td>
<td>DOUBLE</td>
</tr>

<tr>
<td>STARTTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>ENDTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>DRUG_NAME_CN</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DRUG_NAME</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DRUG_NAME_GENERIC</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>PROD_STRENGTH</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DOSE_VAL_RX</td>
<td>DOUBLE</td>
</tr>

<tr>
<td>DOSE_UNIT_RX</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DRUG_FORM</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient, <code>HADM_ID</code> is unique to a patient hospital stay and <code>ICUSTAY_ID</code> is unique to a patient ICU stay.</p>

<h2 id="starttime-endtime"><code>STARTTIME</code>, <code>ENDTIME</code></h2>

<p><code>STARTTIME</code> and <code>ENDTIME</code> specify the time for which the prescription was valid.</p>

<h2 id="drug-name-cn-drug-name-generic-drug-form"><code>DRUG_NAME_CN</code>, <code>DRUG_NAME</code>, <code>DRUG_FORM</code></h2>

<p>These columns are various representations of the drug prescribed to the patient.</p>

<h2 id="prod-strength"><code>PROD_STRENGTH</code></h2>

<h2 id="dose-val-rx-dose-unit-rx"><code>DOSE_VAL_RX</code>, <code>DOSE_UNIT_RX</code></h2>
<p><code>DOSE_VAL_RX</code> provides the dosage of drug prescibed, <code>DOSE_UNIT_RX</code> provides the unit of drug dose.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-prescriptions-table">The prescriptions table</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></a></li>
<li><a href="#starttime-endtime"><code>STARTTIME</code>, <code>ENDTIME</code></a></li>
<li><a href="#drug-type"><code>DRUG_TYPE</code></a></li>
<li><a href="#drug-name-cn-drug-name-generic-drug-form"><code>DRUG_NAME_CN</code>, <code>DRUG_NAME</code>, <code>DRUG_FORM</code></a></li>
<li><a href="#prod-strength"><code>PROD_STRENGTH</code></a></li>
<li><a href="#dose-val-rx-dose-unit-rx"><code>DOSE_VAL_RX</code>, <code>DOSE_UNIT_RX</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>