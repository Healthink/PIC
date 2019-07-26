<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">


<h1 id="types-of-data">Types of data in the database</h1>

<p>Data within PIC were recorded during routine clinical care and not explicitly for the purpose of retrospective data analysis. This is a key point to keep in mind when analyzing the data.</p>
<p>There are two types of data in the database: static data and dynamic data. Static data is recorded once for a given identifier. An example of static data is the <code>DOB</code> column in the PATIENTS table. Each patient has only one date of birth, which does not change over time and is not recorded with an associated timestamp. An example of dynamic data is a patient's blood pressure, which is periodically measured during a hospital stay.</p>
<P>This distinction between static data and dynamic data is merely a helpful conceptual construct: there is no strict technical distinction between date of birth and heart rate. However, static data tends to not have an associated <code>ITEMID</code> (as there is no need to repeatedly record values for static data), whereas dynamic data have an <code>ITEMID</code> to facilitate efficient storage of repeated measurements.</P>

<h1 id="static-data">Static data</h1>

<h1 id="subject-id"><code>SUBJECT_ID</code></h1>

<p>The following is a list of static data available in the database for <code>SUBJECT_ID</code> in the PATIENTS table:</p>
<p>The only static data available for patients are their gender (<code>GENDER</code>), date of birth (<code>DOB</code>) and dates of death (<code>DOD</code>). These columns all occur in the PATIENTS table.</p>

<h1 id="hadm-id"><code>HADM_ID</code></h1>
<p>The following is a list of static data available in the database for <code>HADM_ID</code> in the ADMISSIONS table:</p>

<ul>
<li>Admission time</li>
<li>Discharge time</li>
<li>Death time</li>
</ul>

<h1 id="icustay-id"><code>ICUSTAY_ID</code></h1>
<p>The following is a list of static data available in the database for <code>ICUSTAY_ID</code> in the ICUSTAYS table:</p>

<ul>
<li><code>INTIME</code> - Time entered the ICU</li>
<li><code>OUTTIME</code> - Time left the ICU</li>
<li>First care unit</li>
<li>Last care unit</li>
</ul>



</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#types-of-data">Types of data in the database</a></li>
<li><a href="#static-data">Static data</a></li>
<li><a href="#subject-id"><code>SUBJECT_ID</code></a></li>
<li><a href="#hadm-id"><code>HADM_ID</code></a></li>
<li><a href="#icustay-id"><code>ICUSTAY_ID</code></a></li>
</ul>
</nav>
</div>


                    </div>
</template>
