<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-icustays-table">The icustays table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Defines each ICUSTAY_ID in the database, i.e. defines a single ICU stay.</p>

<p><strong>Number of rows:</strong> 14,007</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li><code>ICUSTAY_ID</code> is a <em>generated</em> identifier that is <em>not</em> based on any raw data identifier. The hospital and ICU databases are not intrinsically linked and so do not have any concept of an ICU encounter identifier.</li>
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
<td>FIRST_CAREUNIT</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>LAST_CAREUNIT</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>FIRST_WARDID</td>
<td>INT</td>
</tr>

<tr>
<td>LAST_WARDID</td>
<td>INT</td>
</tr>

<tr>
<td>INTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>OUTTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>LOS</td>
<td>DOUBLE</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient, <code>HADM_ID</code> is unique to a patient hospital stay and <code>ICUSTAY_ID</code> is unique to a patient ICU stay.</p>

<h2 id="first-careunit-last-careunit"><code>FIRST_CAREUNIT</code>, <code>LAST_CAREUNIT</code></h2>

<p><code>FIRST_CAREUNIT</code> and <code>LAST_CAREUNIT</code> contain, respectively, the first and last ICU type in which the patient was cared for. As an <code>ICUSTAY_ID</code> groups all ICU admissions within 24 hours of each other, it is possible for a patient to be transferred from one type of ICU to another and have the same <code>ICUSTAY_ID</code>.</p>

<h2 id="first-wardid-last-wardid"><code>FIRST_WARDID</code>, <code>LAST_WARDID</code></h2>

<p><code>FIRST_WARDID</code> and <code>LAST_WARDID</code> contain the first and last ICU unit in which the patient stayed. Note the grouping of physical locations in the hospital database is referred to as ward. Though in practice ICUs are not referred to as wards, the hospital database technically tracks ICUs as “wards with an ICU cost center”. As a result, each ICU is associated with a <code>WARDID</code>.</p>

<h2 id="intime-outtime"><code>INTIME</code>, <code>OUTTIME</code></h2>

<p><code>INTIME</code> provides the date and time the patient was transferred into the ICU. <code>OUTTIME</code> provides the date and time the patient was transferred out of the ICU.</p>

<h2 id="los"><code>LOS</code></h2>

<p><code>LOS</code> is the length of stay for the patient for the given ICU stay, which may include one or more ICU units. The length of stay is measured in fractional days.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-icustays-table">The icustays table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id-icustay-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code>, <code>ICUSTAY_ID</code></a></li>
<li><a href="#first-careunit-last-careunit"><code>FIRST_CAREUNIT</code>, <code>LAST_CAREUNIT</code></a></li>
<li><a href="#first-wardid-last-wardid"><code>FIRST_WARDID</code>, <code>LAST_WARDID</code></a></li>
<li><a href="#intime-outtime"><code>INTIME</code>, <code>OUTTIME</code></a></li>
<li><a href="#los"><code>LOS</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>