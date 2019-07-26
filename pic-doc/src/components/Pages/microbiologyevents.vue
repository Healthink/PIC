<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-microbiologyevents-table">The microbiologyevents table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Contains microbiology information, including tests performed and sensitivities.</p>

<p><strong>Number of rows:</strong> 183,869</p>

<p><strong>Links to:</strong></p>

<ul>
<li>PATIENTS on <code>SUBJECT_ID</code></li>
<li>ADMISSIONS on <code>HADM_ID</code></li>
<li>D_ITEMS on <code>SPEC_ITEMID</code></li>
<li>D_ITEMS on <code>ORG_ITEMID</code></li>
<li>D_ITEMS on <code>AB_ITEMID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>If the organism is null, then the culture had no growth reported.</li>
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
<td>CHARTTIME</td>
<td>DATETIME</td>
</tr>

<tr>
<td>SPEC_ITEMID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>SPEC_TYPE_DESC</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>ORG_ITEMID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>ORG_NAME</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>AB_ITEMID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>AB_NAME</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DILUTION_TEXT</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DILUTION_COMPARISON</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>DILUTION_VALUE</td>
<td>DOUBLE</td>
</tr>

<tr>
<td>INTERPRETATION</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<h2 id="subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></h2>

<p>Identifiers which specify the patient: <code>SUBJECT_ID</code> is unique to a patient and <code>HADM_ID</code> is unique to a patient hospital stay.</p>

<h2 id="charttime"><code>CHARTTIME</code></h2>

<p><code>CHARTTIME</code> records the time at which an observation was charted, and is usually the closest proxy to the time the data was actually measured.

<h2 id="spec-itemid-spec-type-desc"><code>SPEC_ITEMID</code>, <code>SPEC_TYPE_DESC</code></h2>

<p>Specimen which is tested for bacterial growth.</p>

<h2 id="org-itemid-org-name"><code>ORG_ITEMID</code>, <code>ORG_NAME</code></h2>

<p>The organism, if any, which grew when tested. If NULL, no organism grew (i.e. negative culture).</p>

<h2 id="ab-itemid-ab-name"><code>AB_ITEMID</code>, <code>AB_NAME</code></h2>

<p>If an antibiotic was tested against the given organism for sensitivity, the name is listed here.</p>

<h2 id="dilution-text-dilution-comparison-dilution-value"><code>DILUTION_TEXT</code>, <code>DILUTION_COMPARISON</code>, <code>DILUTION_VALUE</code></h2>

<p>Dilution values when testing antibiotic sensitivity.</p>

<h2 id="interpretation"><code>INTERPRETATION</code></h2>

<p><code>INTERPRETATION</code> of the antibiotic sensitivity, and indicates the results of the test. “S” is sensitive, “R” is resistant, “I” is intermediate, and “P” is pending.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-microbiologyevents-table">The microbiologyevents table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#subject-id-hadm-id"><code>SUBJECT_ID</code>, <code>HADM_ID</code></a></li>
<li><a href="#charttime"><code>CHARTDATE</code>, <code>CHARTTIME</code></a></li>
<li><a href="#spec-itemid-spec-type-desc"><code>SPEC_ITEMID</code>, <code>SPEC_TYPE_DESC</code></a></li>
<li><a href="#org-itemid-org-name"><code>ORG_ITEMID</code>, <code>ORG_NAME</code></a></li>
<li><a href="#ab-itemid-ab-name"><code>AB_ITEMID</code>, <code>AB_NAME</code></a></li>
<li><a href="#dilution-text-dilution-comparison-dilution-value"><code>DILUTION_TEXT</code>, <code>DILUTION_COMPARISON</code>, <code>DILUTION_VALUE</code></a></li>
<li><a href="#interpretation"><code>INTERPRETATION</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>