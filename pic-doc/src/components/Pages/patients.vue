<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-patients-table">The patients table</h1>

<p><strong>Table source:</strong> Hospital databases.</p>

<p><strong>Table purpose:</strong> Contains all charted data for all patients.</p>

<p><strong>Number of rows:</strong> 12,881</p>

<p><strong>Links to:</strong></p>

<ul>
<li>ADMISSIONS on <code>SUBJECT_ID</code></li>
<li>ICUSTAYS on <code>SUBJECT_ID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>The <code>PATIENTS</code> data only contains the date of death as recorded in the hospital database.</li>
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
<td>GENDER</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DOB</td>
<td>DATETIME</td>
</tr>

<tr>
<td>DOD</td>
<td>DATETIME</td>
</tr>

<tr>
<td>EXPIRE_FLAG</td>
<td>INT</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id"><code>SUBJECT_ID</code></h2>

<p><code>SUBJECT_ID</code> is a unique identifier which specifies an individual patient. <code>SUBJECT_ID</code> is a candidate key for the table, so is unique for each row. Information that is consistent for the lifetime of a patient is stored in this table.</p>

<h2 id="gender"><code>GENDER</code></h2>

<p><code>GENDER</code> is the genotypical sex of the patient.</p>

<h2 id="dob"><code>DOB</code></h2>

<p><code>DOB</code> is the date of birth of the given patient.</p>

<h2 id="dod"><code>DOD</code></h2>

<p><code>DOD</code> is the date of death for the given patient as recorded in the hospital database.</p>

<h2 id="expire-flag"><code>EXPIRE_FLAG</code></h2>

<p><code>EXPIRE_FLAG</code> is a binary flag which indicates whether the patient died, i.e. whether <code>DOD</code> is 0 or 1, '1' means patient died in the hospital.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-patients-table">The patients table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id"><code>SUBJECT_ID</code></a></li>
<li><a href="#gender"><code>GENDER</code></a></li>
<li><a href="#dob"><code>DOB</code></a></li>
<li><a href="#dod"><code>DOD</code></a></li>
<li><a href="#expire-flag"><code>EXPIRE_FLAG</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>