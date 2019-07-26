<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-labevents-table">The labevents table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Contains all laboratory measurements for a given patient.</p>

<p><strong>Number of rows:</strong> 10,683,802</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>D_LABITEMS on <code>ITEMID</code></li>
</ul>

<h1 id="brief-summary">Brief summary</h1>

<p>The <code>LABEVENTS</code> data contains information regarding laboratory based measurements. The process for acquiring a lab measurement is as follows: first, a member of the clinical staff acquires a fluid from a site in the patient’s body (e.g. blood from an arterial line, urine from a catheter, etc). Next, the fluid is bar coded to associate it with the patient <em>and</em> timestamped to record the time of the fluid acquisition. The lab analyses the data and returns a result within 4-12 hours.</p>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>Note that the time associated with this result is the time of the fluid <em>acquisition</em>, not the time that the values were made available to the clinical staff.</li>
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
<td>ITEMID</td>
<td>INT</td>
</tr>

<tr>
<td>CHARTTIME</td>
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

<tr>
<td>FLAG</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient and <code>HADM_ID</code> is unique to a patient hospital stay.</p>

<h2 id="itemid"><code>ITEMID</code></h2>

<p>Identifier for a single measurement type in the database. Each row associated with one <code>ITEMID</code>.</p>

<h2 id="charttime"><code>CHARTTIME</code></h2>

<p><code>CHARTTIME</code> records the time at which an observation was charted, and is usually the closest proxy to the time the data was actually measured.
Note that because the data is directly sourced from the laboratory database, it is <em>not</em> validated by ICU clinical staff, and as a result there is no associated <code>STORETIME</code>.</p>

<h2 id="value-valuenum"><code>VALUE</code>, <code>VALUENUM</code></h2>

<p><code>VALUE</code> contains the value measured for the concept identified by the <code>ITEMID</code>. If this value is numeric, then <code>VALUENUM</code> contains the same data in a numeric format. If this data is not numeric, <code>VALUENUM</code> is null.</p>

<h2 id="valueuom"><code>VALUEUOM</code></h2>

<p><code>VALUEUOM</code> is the unit of measurement for the <code>VALUE</code>, if appropriate.</p>

<h2 id="flag"><code>FLAG</code></h2>

<p><code>FLAG</code> indicates whether the laboratory value is considered abnormal or not, using pre-defined thresholds. ‘z’ means normal, ‘h’ means high, ‘l’ means low.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-labevents-table">The labevents table</a></li>
<li><a href="#brief-summary">Brief summary</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#itemid"><code>ITEMID</code></a></li>
<li><a href="#charttime"><code>CHARTTIME</code></a></li>
<li><a href="#value-valuenum"><code>VALUE</code>, <code>VALUENUM</code></a></li>
<li><a href="#valueuom"><code>VALUEUOM</code></a></li>
<li><a href="#flag"><code>FLAG</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>
