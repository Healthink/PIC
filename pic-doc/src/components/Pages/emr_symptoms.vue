<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-emr-symptoms-table">The emr_symptoms table</h1>

<p><strong>Table source:</strong> Hospital databases.</p>

<p><strong>Table purpose:</strong> Symptoms extracted from notes.</p>

<p><strong>Number of rows:</strong> 763,899</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>The EMR_SYMPTOMS table is extracted from the notes, for example physician notes, discharge summaries, and so on.</li>
</ul>

<!-- # Important considerations -->

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
<td>EMR_ID</td>
<td>INT</td>
</tr>

<tr>
<td>RECORDTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>SYMPTOM_NAME_CN</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>SYMPTOM_NAME</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>SYMPTOM_ATTRIBUTE</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient, <code>HADM_ID</code> is unique to a patient hospital stay.</p>

<h2 id="emr-id"><code>EMR_ID</code></h2>

<p>The <code>EMR_ID</code> column is the identifier of each notes in EMR.</p>

<h2 id="recodtime"><code>RECORDTIME</code></h2>

<p><code>RECORDTIME</code> represents the time at which the note was recorded - that is - recorded on the clinical information system.

<h2 id="symptom-name-cn"><code>SYMPTOM_NAME_CN</code>, <code>SYMPTOM_NAME</code></h2>

<p>The <code>SYMPTOM_NAME_CN</code> column describes the Chinese name of the symptoms. The <code>SYMPTOM_NAME</code> column describes the corresponding English name.</p>

<h2 id="symptom-attribute"><code>SYMPTOM_ATTRIBUTE</code></h2>

<p>The <code>SYMPTOM_ATTRIBUTE</code> column indicates whether the symptom is presented or not.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-emr-symptoms-table">The inputevents_cv table</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#emr-id"><code>EMR_ID</code></a></li>
<li><a href="#recodtime"><code>RECORDTIME</code></a></li>
<li><a href="#symptom-name-cn"><code>SYMPTOM_NAME_CN</code>, <code>SYMPTOM_NAME</code></a></li>
<li><a href="#symptom-attribute"><code>SYMPTOM_ATTRIBUTE</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>

</template>