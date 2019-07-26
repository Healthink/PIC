<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-chartevents-table">The chartevents table</h1>

<p><strong>Table source:</strong> Hospital databases.</p>

<p><strong>Table purpose:</strong> Contains all charted data for all patients.</p>

<p><strong>Number of rows:</strong> 1,177,050</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>ICUSTAYS on <code>ICUSTAY_ID</code></li>
<li>D_ITEMS on <code>ITEMID</code></li>
</ul>

<h1 id="brief-summary">Brief summary</h1>

<p>CHARTEVENTS contains all the charted data available for a patient. The electronic chart displays patients’ routine vital signs and any additional information: demographic data, input and output, and so on. As a result, the bulk of information about a patient’s stay is contained in CHARTEVENTS except for laboratory values and microbiology values.</p>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>There is no bedside monitoring data in the chartevents now.</li>
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
<td>ITEMID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>CHARTTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>STORETIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>VALUE</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>VALUENUM</td>
<td>DOUBLE</td>
</tr>

<tr>
<td>VALUEUOM</td>
<td>VARCHAR</td>
</tr>

</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient, <code>HADM_ID</code> is unique to a patient hospital stay and <code>ICUSTAY_ID</code> is unique to a patient ICU stay.</p>

<h2 id="itemid"><code>ITEMID</code></h2>

<p>Identifier for a single measurement type in the database. Each row associated with one <code>ITEMID</code> (e.g. 1003) corresponds to an instantiation of the same measurement (e.g. heart rate).</p>

<h2 id="charttime-storetime"><code>CHARTTIME</code>, <code>STORETIME</code></h2>

<p><code>CHARTTIME</code> records the time at which an observation was made, and is usually the closest proxy to the time the data was actually measured. <code>STORETIME</code> records the time at which an observation was manually input or manually validated by a member of the clinical staff.</p>

<h2 id="value-valuenum"><code>VALUE</code>, <code>VALUENUM</code></h2>

<p><code>VALUE</code> contains the value measured for the concept identified by the <code>ITEMID</code>. If this value is numeric, then <code>VALUENUM</code> contains the same data in a numeric format. If this data is not numeric, <code>VALUENUM</code> is null. <code>VALUENUM</code> contains the score and <code>VALUE</code> contains the score and text describing the meaning of the score.</p>

<h2 id="valueuom"><code>VALUEUOM</code></h2>

<p><code>VALUEUOM</code> is the unit of measurement for the <code>VALUE</code>, if appropriate.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-chartevents-table">The chartevents table</a></li>
<li><a href="#brief-summary">Brief summary</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></a></li>
<li><a href="#itemid"><code>ITEMID</code></a></li>
<li><a href="#charttime-storetime"><code>CHARTTIME</code>, <code>STORETIME</code></a></li>
<li><a href="#value-valuenum"><code>VALUE</code>, <code>VALUENUM</code></a></li>
<li><a href="#valueuom"><code>VALUEUOM</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>