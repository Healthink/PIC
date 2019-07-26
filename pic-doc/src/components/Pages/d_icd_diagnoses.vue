<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-d-icd-diagnoses-table">The d_icd_diagnoses table</h1>

<p><strong>Table source:</strong> Online sources.</p>

<p><strong>Table purpose:</strong> Definition table for ICD diagnoses.</p>

<p><strong>Number of rows:</strong> 25,378</p>

<p><strong>Links to:</strong></p>

<ul>
<li>DIAGNOSES_ICD ON <code>ICD10_CODE_CN</code></li>
</ul>

<h1 id="brief-summary">Brief summary</h1>

<p>This table defines International Classification of Diseases Version 10 (ICD-10) codes for <strong>diagnoses</strong>. These codes are assigned at the end of the patient’s stay and are used by the hospital to bill for care provided.</p>

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
<td>ICD10_CODE_CN</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>ICD10_CODE</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>TITLE_CN</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>TITLE</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="icd10-code-cn"><code>ICD10_CODE_CN</code>, <code>ICD10_CODE</code></h2>

<p><code>ICD10_CODE</code> is the International Coding Definitions Version 10 (ICD-10) code. Each code corresponds to a single diagnostic concept. <code>ICD10_CODE_CN</code> is Chinese version of the International Coding Definitions Version 10 (ICD-10) code. We mapped the Chinese version <code>ICD10_CODE_CN</code> to the <code>ICD10_CODE</code>.</p>

<h2 id="title-cn-title"><code>TITLE_CN</code>, <code>TITLE</code></h2>

<p>These title fields provide a brief definition for the given diagnosis code in <code>ICD10_CODE</code> and <code>ICD10_CODE_CN</code>.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-d-icd-diagnoses-table">The d_icd_diagnoses table</a></li>
<li><a href="#brief-summary">Brief summary</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#icd10-code-cn"><code>ICD10_CODE_CN</code>, <code>ICD10_CODE</code></a></li>
<li><a href="#title-cn-title"><code>TITLE_CN</code>, <code>TITLE</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>