<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="the-d-items-table">The d_items table</h1>

<p><strong>Table source:</strong> Hospital databases.</p>

<p><strong>Table purpose:</strong> Definition table for all items in the hospital databases.</p>

<p><strong>Number of rows:</strong> 465</p>

<p><strong>Links to:</strong></p>

<ul>
<li>CHARTEVENTS on <code>ITEMID</code></li>
<li>SURGERY_VITAL_SIGNS on <code>ITEMID</code></li>
<li>MICROBIOLOGYEVENTS on <code>SPEC_ITEMID</code>, <code>ORG_ITEMID</code>, or <code>AB_ITEMID</code> (for example, use <code>d_items.ITEMID = microbiologyevents.SPEC_ITEMID</code>)</li>
<li>OUTPUTEVENTS on <code>ITEMID</code></li>
</ul>

<h1 id="important-considerations">Important considerations</h1>

<ul>
<li>There are duplicate <code>ITEMID</code> for some concepts. For example, heart rate is captured both as an <code>ITEMID</code> of 1003 (CHARTEVENTS) and as an <code>ITEMID</code> of SV1 (SURGERY_VITAL).</li>
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
<td>VARCHAR</td>
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
<td>LINKSTO</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>CATEGORY</td>
<td>VARCHAR</td>
</tr>

<tr>
<td>UNITNAME</td>
<td>VARCHAR</td>
</tr>

</tbody>
</table>

<h1 id="detailed-description">Detailed Description</h1>

<p>The D_ITEMS table defines <code>ITEMID</code>, which represents measurements in the database. Measurements of the same type (e.g. heart rate) will have the same <code>ITEMID</code> (e.g. 1003). The <code>ITEMID</code> column is an alternate primary key to this table: it is unique to each row.</p>

<p>Note that the D_ITEMS table does <em>not</em> link to the LABEVENTS table.</p>

<h2 id="itemid"><code>ITEMID</code></h2>

<p>As an alternate primary key to the table, <code>ITEMID</code> is unique to each row.</p>

<h2 id="label-cn-label"><code>LABEL_CN</code>, <code>LABEL</code></h2>

<p>The <code>LABEL_CN</code> column describes the Chinese concept which is represented by the <code>ITEMID</code>. The <code>LABEL</code> column describes the corresponding English concept.</p>

<h2 id="linksto"><code>LINKSTO</code></h2>

<p><code>LINKSTO</code> provides the table name which the data links to. For example, a value of ‘chartevents’ indicates that the <code>ITEMID</code> of the given row is contained in CHARTEVENTS. A single <code>ITEMID</code> is only used in one event table, that is, if an <code>ITEMID</code> is contained in CHARTEVENTS it will <em>not</em> be contained in any other event table.</p>

<h2 id="category"><code>CATEGORY</code></h2>

<p><code>CATEGORY</code> provides some information of the type of data the <code>ITEMID</code> corresponds to.</p>

<h2 id="unitname"><code>UNITNAME</code></h2>

<p><code>UNITNAME</code> specifies the unit of measurement used for the <code>ITEMID</code>. This column is not always available, and this may be because the unit of measurement varies, a unit of measurement does not make sense for the given data type, or the unit of measurement is simply missing. Note that there is sometimes additional information on the unit of measurement in the associated event table, e.g. the <code>VALUEUOM</code> column in CHARTEVENTS.</p>

</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#the-d-items-table">The d_items table</a></li>
<li><a href="#important-considerations">Important considerations</a></li>
<li><a href="#table-columns">Table columns</a></li>
<li><a href="#detailed-description">Detailed Description</a>
<ul>
<li><a href="#itemid"><code>ITEMID</code></a></li>
<li><a href="#label-cn-label"><code>LABEL_CN</code>, <code>LABEL</code></a></li>
<li><a href="#linksto"><code>LINKSTO</code></a></li>
<li><a href="#category"><code>CATEGORY</code></a></li>
<li><a href="#unitname"><code>UNITNAME</code></a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>