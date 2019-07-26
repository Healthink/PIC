<template>
<div class="panel-body">



<div class="col-lg-8 col-md-12">

<h1 id="date-shifting">Date shifting</h1>

<p>All dates in the database have been shifted to protect patient confidentiality. Dates will be internally consistent for the same patient, but randomly distributed in the future. Dates of birth which occur in the present time are <em>not</em> true dates of birth.</p>

<h1 id="time-columns-in-the-database">Time columns in the database</h1>

<h2 id="charttime-vs-storetime"><code>CHARTTIME</code> vs. <code>STORETIME</code></h2>

<p><code>CHARTTIME</code> is the time at which a measurement is <em>charted</em>. In almost all cases, this is the time which best matches the time of actual measurement. In the case of continuous vital signs (heart rate, respiratory rate, invasive blood pressure, non-invasive blood pressure, oxygen saturation), the <code>CHARTTIME</code> is usually exactly the time of measurement. <code>STORETIME</code> is the time at which the data is recorded in the database: logically it occurs after <code>CHARTTIME</code>, often by hours, but usually not more than that.</p>

<h2 id="admittime-dischtime-deathtime">ADMITTIME, DISCHTIME, DEATHTIME</h2>

<p><code>ADMITTIME</code> and <code>DISCHTIME</code> are the hospital admission and discharge times, respectively. <code>DEATHTIME</code> is the time of death of a patient if they died <em>in</em> hospital. If the patient did not die within the hospital for the given hospital admission, <code>DEATHTIME</code> will be null.</p>

<h2 id="intime-outtime">INTIME, OUTTIME</h2>

<p><code>INTIME</code> and <code>OUTTIME</code> provide the time at which a patient entered and exited the given unit. In the ICUSTAYS table, the unit is always an ICU.</p>

<h2 id="starttime-endtime">STARTTIME, ENDTIME</h2>

<p>For events which occur over a period of time, <code>STARTTIME</code> and <code>ENDTIME</code> provide the beginning and end time of the event. For medical infusions, these columns indicate the period over which the substance was administered.</p>

<h2 id="dob-dod">DOB, DOD</h2>

<p><code>DOB</code> is the patient’s date of birth. <code>DOD</code> is the patient’s date of death: sourced either from the hospital database.</p>



</div>
<div id="toc" class="col-lg-offset-6 toc ">
    <nav id="TableOfContents">
<ul>
<li><a href="#date-shifting">Date shifting</a></li>
<li><a href="#time-columns-in-the-database">Time columns in the database</a>
<ul>
<li><a href="#charttime-vs-storetime"><code>CHARTTIME</code> vs <code>STORETIME</code></a></li>
<li><a href="#chartdate">CHARTDATE</a></li>
<li><a href="#admittime-dischtime-deathtime">ADMITTIME, DISCHTIME, DEATHTIME</a></li>
<li><a href="#intime-outtime">INTIME, OUTTIME</a></li>
<li><a href="#starttime-endtime">STARTTIME, ENDTIME</a></li>
<li><a href="#dob-dod">DOB, DOD</a></li>
</ul></li>
</ul>
</nav>
</div>


                    </div>
</template>