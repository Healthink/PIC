<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-surgery-vital-table">The surgery_vital_signs table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Contains vital signs recorded while a patient is present in the operating room.</p>

<p><strong>Number of rows:</strong> 1,299,369</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>D_ITEMS on <code>ITEMID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>The <code>SURGERY_VITAL_SIGNS</code> data records vital signs per 5 minute during the surgery.</li>
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
<td>VISIT_ID</td>
<td>INT</td>
</tr>

<tr>
<td>OPER_ID</td>
<td>INT</td>
</tr>

<tr>
<td>ITEM_NO</td>
<td>INT</td>
</tr>

<tr>
<td>MONITORTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>ITEMID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>VALUE</td>
<td>INT</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient and <code>HADM_ID</code> is unique to a patient hospital stay.</p>

<h2 id="visit-id-oper-id"><code>VISIT_ID</code>, <code>OPER_ID</code>, <code>ITEM_NO</code></h2>

<p><code>VISIT_ID</code> indicates how many times the patient has been admitted. <code>OPER_ID</code> provides the order of surgery in this hospitalization. <code>ITEM_NO</code> provides the order of vital signs measurement in this surgery.</p>

<h2 id="monitor-time"><code>MONITORTIME</code></h2>

<p><code>MONITORTIME</code> records the time at which an observation was recorded.</p>

<h2 id="itemid"><code>ITEMID</code></h2>

<p>Identifier for a single measurement type in the database. Each row associated with one <code>ITEMID</code>.</p>

<h2 id="value"><code>VALUE</code></h2>

<p><code>VALUE</code> contains the value measured for the concept identified by the <code>ITEMID</code>.</p>
</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-surgery-vital-table">The surgery_vital_signs table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#visit-id-oper-id"><code>VISIT_ID</code>, <code>OPER_ID</code>, <code>ITEM_NO</code></a></li>
<li><a href="#monitor-time"><code>MONITORTIME</code></a></li>
<li><a href="#itemid"><code>ITEMID</code></a></li>
<li><a href="#value"><code>VALUE</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</tempalte>