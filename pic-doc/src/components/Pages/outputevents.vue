<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-outputevents-table">The outputevents table</h1>

<p><strong>Table source:</strong> Hospital databases.</p>

<p><strong>Table purpose:</strong> Output data for patients.</p>

<p><strong>Number of rows:</strong> 39,891</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>ICUSTAYS on <code>ICUSTAY_ID</code></li>
<li>D_ITEMS on <code>ITEMID</code></li>
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
<td>INT</td>
</tr>

<tr>
<td>CHARTTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>ITEMID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>VALUE</td>
<td>DOUBLE</td>
</tr>

<tr>
<td>VALUEUOM</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>STORETIME</td>
<td>DATETIME</td>
</tr>

</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient, <code>HADM_ID</code> is unique to a patient hospital stay and <code>ICUSTAY_ID</code> is unique to a patient ICU stay.</p>

<h2 id="charttime"><code>CHARTTIME</code></h2>

<p><code>CHARTTIME</code> is the time of an output event.</p>

<h2 id="itemid"><code>ITEMID</code></h2>

<p>Identifier for a single measurement type in the database. Each row associated with one <code>ITEMID</code> (e.g. 1003) corresponds to an instantiation of the same measurement (e.g. heart rate).</p>

<h2 id="value-valueuom"><code>VALUE</code>, <code>VALUEUOM</code></h2>

<p><code>VALUE</code> and <code>VALUEUOM</code> list the amount of a substance at the <code>CHARTTIME</code> (when the exact start time is unknown, but usually up to an hour before).</p>

<h2 id="storetime"><code>STORETIME</code></h2>

<p><code>STORETIME</code> records the time at which an observation was manually input or manually validated by a member of the clinical staff.</p>


</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-outputevents-table">The outputevents table</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id-icustay-id">SUBJECT_ID, HADM_ID, ICUSTAY_ID</a></li>
<li><a href="#charttime">CHARTTIME</a></li>
<li><a href="#itemid">ITEMID</a></li>
<li><a href="#value-valueuom">VALUE, VALUEUOM</a></li>
<li><a href="#storetime">STORETIME</a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>