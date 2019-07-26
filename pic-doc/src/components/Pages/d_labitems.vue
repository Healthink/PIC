<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-d-labitems-table">The d_labitems table</h1>

<p><strong>Table source:</strong> Hospital database.</p>

<p><strong>Table purpose:</strong> Definition table for all laboratory measurements.</p>

<p><strong>Number of rows:</strong> 832</p>

<p><strong>Links to:</strong></p>

<ul>
<li>LABEVENTS on <code>ITEMID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>Many of the LOINC codes were assigned post-hoc, and may not be present for every lab measurement. We welcome improvements to the present LOINC codes.</li>
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
<td>ITEMID</td>
<td>INT</td>
</tr>

<tr>
<td>LABEL_CN</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>LABEL</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>FLUID</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>CATEGORY</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>LOINC_CODE</td>
<td>VARCHAR</td>
</tr>
</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<p><code>D_LABITEMS</code> contains definitions for all <code>ITEMID</code> associated with lab measurements in the PIC database. All data in LABEVENTS link to the D_LABITEMS table. Each unique <code>LABEL</code> in the hospital database was assigned an <code>ITEMID</code> in this table, and the use of this <code>ITEMID</code> facilitates efficient storage and querying of the data. Note that lab items are kept separate while most definitions are contained in the D_ITEMS table, and there were good reasons to keep the lab items separate.</p>

<p>As the laboratory data is acquired from the hospital database, the data is consistent across all years in the database. Consequently, there is usually only one <code>ITEMID</code> associated with each concept in the database. Furthermore, the data contains information collected in departments outside the ICU. Most concepts in this table have not been mapped to LOINC codes.</p>

<h2 id="itemid"><code>ITEMID</code></h2>

<p>As a candidate key in the table, <code>ITEMID</code> is unique to each row.</p>

<h2 id="label-cn-label"><code>LABEL_CN</code>, <code>LABEL</code></h2>

<p>The <code>LABEL_CN</code> column describes the Chinese concept which is represented by the <code>ITEMID</code>. The <code>LABEL</code> column describes the corresponding English concept.</p>

<h2 id="fluid"><code>FLUID</code></h2>

<p><code>FLUID</code> describes the substance on which the measurement was made. For example, chemistry measurements are frequently performed on blood, which is listed in this column as ‘BLOOD’. Many of these measurements are also acquirable on other fluids, such as urine, and this column differentiates these distinct concepts.</p>

<h2 id="category"><code>CATEGORY</code></h2>

<p><code>CATEGORY</code> provides higher level information as to the type of measurement.</p>

<h2 id="loinc-code"><code>LOINC_CODE</code></h2>

<p><code>LOINC_CODE</code> contains the LOINC code associated with the given <code>ITEMID</code>. LOINC is an ontology which originally specified laboratory measurements but has since expanded to cover a wide range of clinically relevant concepts. LOINC openly provide a table which contains a large amount of detail about each LOINC code. This table is freely available online or can be provided by the guardians of the database.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-d-labitems-table">The d_labitems table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#itemid"><code>ITEMID</code></a></li>
<li><a href="#label-cn-label"><code>LABEL_CN</code>, <code>LABEL</code></a></li>
<li><a href="#fluid"><code>FLUID</code></a></li>
<li><a href="#category"><code>CATEGORY</code></a></li>
<li><a href="#loinc-code"><code>LOINC_CODE</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>
