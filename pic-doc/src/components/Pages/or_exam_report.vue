<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-orexamreport-table">The or_exam_reports table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Contains all exam for patients.</p>

<p><strong>Number of rows:</strong> 195,827</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>The <code>OR_EXAM_REPORTS</code> data only contains all exams performed during the patient's stay in the hospital, but does not contain the notes of the exam which is in Chinese.</li>
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
<td>EXAMTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>EXAM_ITEM_TYPE_NAME</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>EXAM_ITEM_NAME</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>EXAM_PART_NAME</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient and <code>HADM_ID</code> is unique to a patient hospital stay.</p>

<h2 id="examtime"><code>EXAMTIME</code></h2>

<p><code>EXAMTIME</code> records the date at which the exam was performed.</p>

<h2 id="exam-item-part-name"><code>EXAM_ITEM_TYPE_NAME</code>, <code>EXAM_ITEM_NAME</code>, <code>EXAM_PART_NAME</code></h2>

<p><code>EXAM_ITEM_TYPE_NAME</code> and <code>EXAM_ITEM_NAME</code> define the type of exam performed. <code>EXAM_PART_NAME</code> defines the part of exam performed.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-orexamreport-table">The or_exam_reports table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#examtime"><code>EXAMTIME</code></a></li>
<li><a href="#exam-item-part-name"><code>EXAM_ITEM_TYPE_NAME</code>, <code>EXAM_ITEM_NAME</code>, <code>EXAM_PART_NAME</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>