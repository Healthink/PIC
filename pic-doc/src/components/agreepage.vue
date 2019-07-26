<template>
<div>
<h1 style="margin-top: 0em; padding-top: .4em;">Data use agreement</h1><article id="page" style="max-width: 96%; margin: 0.5em 1em;"><div style="padding: .5em; border: 1px solid #440; margin: 1em; background-color: #fffffc;">
<p>Use this form to submit a data use agreement and request access to restricted-access clinical databases hosted on PhysioNet.  Please be sure to provide all requested information.  <em>Submissions that are clearly incomplete, incorrect, or frivolous may be discarded without notice.</em></p>

<p>If you are a student or a postdoc, please provide your supervisor's name and contact information. If you are not listed in a directory or other easy-to-find page of your organization’s website, please provide the name and contact information of a reference such as a supervisor or colleague. <em>Do not list yourself as reference.</em>
</p>

<p><em>Note: Some users have reported problems with this form when using the browser Safari.  If you are unable to submit the form using Safari, please try a different browser if possible.</em></p>

</div>

<p>By submitting this form, I affirm that if I am granted access to restricted-access clinical databases hosted on PhysioNet:</p>

<ol>
<li>I will not attempt to identify any individual or institution referenced in PhysioNet restricted data.</li>
<li>I will exercise all reasonable and prudent care to avoid disclosure of the identity of any individual or institution referenced in PhysioNet restricted data in any publication or other communication.</li>
<li>I will not share access to PhysioNet restricted data with anyone else.</li>
<li>I will exercise all reasonable and prudent care to maintain the physical and electronic security of PhysioNet restricted data.</li>
<li>If I find information within PhysioNet restricted data that I believe might permit identification of any individual or institution, I will report the location of this information promptly by email to <a href="mailto:PHI-report@physionet.org">PHI-report@physionet.org</a>, citing the location of the specific information in question so that it can be investigated and removed if necessary.</li>
<li>I have requested access to PhysioNet restricted data for the sole purpose of lawful use in scientific research, and I will use my privilege of access, if it is granted, for this purpose and no other.</li>
<li>I have completed a training program in human research subject protections and HIPAA regulations, and I am submitting proof of having done so.</li>
<li>I will indicate the general purpose for which I intend to use the database in my application.</li>
<li>If I openly disseminate my results, I will also contribute the code used to produce those results to a repository that is open to the research community.</li>
<li>This agreement may be terminated by either party at any time, but my obligations with respect to restricted data from PhysioNet shall continue after termination.</li>
</ol>
 

 
<form method="post" name="MyForm" action="manage-duas" id="duaform" onsubmit="return checkInp()" enctype="multipart/form-data" autocomplete="off">
    <fieldset>
    <label for="firstname">My first (given) name(s):</label>
    <input type="text" name="firstname" id="name" size="50" title="First (given) name" value="" required=""><br>
    <label for="lastname">My last (family) name(s):</label>
    <input type="text" name="lastname" id="name" size="50" title="Last (family) name" value="" required=""><br>
    <label for="suffix">Suffix (e.g., Jr.), if applicable:</label>
    <input type="text" name="suffix" id="suffix" size="50" placeholder="" value=""><br>
   <p style="font-size: .9em; max-width: 60%; margin: .5em auto 0 auto; padding: 0;">Suffix is not required. Please leave the suffix blank if your name does not include a suffix like "Jr." or "III".  Do not list degrees.  Do not put a prefix like "Mr" or "Ms".  Do not put "not applicable".  Especially, do not leave a string of digits from browser autofill. Thank you.</p>
    <label>My PhysioNetWorks username:</label>18867139545@163.com<br>
    <label for="telephone">Telephone number, including country/area code:</label>
    <input type="tel" name="telephone" id="telephone" size="50" title="Telephone number" required=""><br>
    <label for="organization">Organization:</label>
    <input type="text" name="organization" id="organization" size="50" title="Your employer or primary affiliation" value="" required=""><br>
    <label for="title">Job title or position:</label>
    <input type="text" name="title" id="title" size="50" title="Your job title or position (e.g., student) within your institution or organization" required=""><br>
    <label for="street_address">Street address:</label>
    <input type="text" name="street_address" id="street_address" size="50" title="Your full street address, with lines separated by commas" required=""><br>
    <label for="city">City:</label>
    <input type="text" name="city" id="city" size="50" title="City" value="" required=""><br>
    <label for="state">State/Province:</label>
    <input type="text" name="state" id="state" value="" title="State or province"><br>
    <label for="postal_code">ZIP/postal code:</label>
    <input type="text" name="postal_code" id="postal_code" title="ZIP or postal code" required=""><br>
    <label for="country">Country:</label><select name="country" required="" title="Country">
<option value=""></option>
<option value="Afghanistan">Afghanistan</option>
<option value="Aland Islands">Aland Islands</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="British Virgin Islands">British Virgin Islands</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Channel Islands">Channel Islands</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cote d'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Democratic People's Republic of Korea">Democratic People's Republic of Korea</option>
<option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Faeroe Islands">Faeroe Islands</option>
<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Holy See">Holy See</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Isle of Man">Isle of Man</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macao">Macao</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia (Federated States of)">Micronesia (Federated States of)</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Occupied Palestinian Territory">Occupied Palestinian Territory</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Republic of Korea">Republic of Korea</option>
<option value="Republic of Moldova">Republic of Moldova</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russian Federation">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Helena">Saint Helena</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syrian Arab Republic">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Thailand">Thailand</option>
<option value="The former Yugoslav Republic of Macedonia">The former Yugoslav Republic of Macedonia</option>
<option value="Timor-Leste">Timor-Leste</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom of Great Britain and Northern Ireland">United Kingdom of Great Britain and Northern Ireland</option>
<option value="United Republic of Tanzania">United Republic of Tanzania</option>
<option value="United States of America">United States of America</option>
<option value="United States Virgin Islands">United States Virgin Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Viet Nam">Viet Nam</option>
<option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select><br>
    <label for="url">Web page:</label>
    <input type="url" name="url" id="url" size="50" title="Your professional or personal home page, or a page showing your listing in your organization's directory"><br>
    </fieldset>
    <fieldset>
    <label for="course">Human studies training course (name of course):</label>
    <input type="text" name="course" id="course" size="50" value="" title="The title and sponsoring organization of the human studies training course you completed (e.g., CITI &quot;Data or Specimens Only Research&quot;)" required=""><br>
    <label for="coursedate">Date completed:</label>
    <input type="text" name="coursedate" id="coursedate" size="50" title="The date you completed the course" required=""><br>
    <label for="certificate">Training completion report:</label>
    <input type="file" name="certificate" id="certificate" title="Upload your certificate of completion of the CITI “Data or Specimens Only Research” training program (PDF or image file).  If you would like to submit multiple pages, please combine them into a single pdf file." required=""><br>
    <p style="font-size: .9em; max-width: 60%; margin: .5em auto 0 auto; padding: 0;">Upload the completion report from the CITI “Data or Specimens Only Research” training program (PDF or image file).  The completion report lists all modules completed, with dates and scores. If you would like to submit multiple pages, please combine them into a single pdf file.</p>
    </fieldset>
    <fieldset>
    <label for="reftype">* Reference category:</label><select name="reftype" title="Reference category">
<option value=""></option>
<option value="supervisor (required for students and postdocs)">supervisor (required for students and postdocs)</option>
<option value="colleague">colleague</option>
<option value="co-author">co-author</option>
<option value="other">other</option>
</select><br> 
    <label for="refname">* Reference's name:</label>
    <input type="text" name="refname" id="refname" size="50" title="Your research supervisor, or a colleague who can vouch for you"><br>
    <label for="reftelephone">* Reference's telephone number:</label>
    <input type="tel" name="reftelephone" id="reftelephone" size="50" title="Your reference's telephone number"><br>
    <label for="refemail">* Reference's email address:</label>
    <input type="email" name="refemail" id="refemail" size="50" title="Your reference's e-mail address"><br>
    <label for="reftitle">* Reference's job title or position:</label>
    <input type="text" name="reftitle" id="reftitle" size="50" title="Your reference's professional title or position">
    <p style="font-size: .9em; max-width: 60%; margin: .5em auto 0 auto; padding: 0;">( * information required of students and postdocs, and of anyone—regardless of rank or experience—who is not listed in a directory or other easy-to-find page of his or her organization's website. Do not list yourself as reference!  If you do so, your request may be discarded without notice. )</p><br>
    </fieldset>
    <fieldset>
    <label for="researcharea" style="vertical-align: top;">General research area for which the data will be used:</label>
    <textarea name="researcharea" id="researcharea" form="duaform" cols="60" row="4" title="A short summary of how you plan to use the data" required=""></textarea><br>
    <label>Date of this agreement:</label>14 April, 2019<br>
    </fieldset>
<p style="text-align: center;"><strong>Before submitting the form, please proofread it and correct any evident errors. Watch out especially for entries made by browser auto-complete.</strong></p>
    <p style="text-align: center;">
    <input type="hidden" name="dbrequested" value="MIMICIIClinicalDatabase">
    <input type="submit" name="SubmitDUA/Save" id="SubmitDUA/Save" value="Submit DUA" title="Submit your data use agreement">&nbsp;&nbsp;&nbsp;<input type="reset" name="reset" id="reset" value="Reset" title="Reset the form.">
    </p>
    </form><form method="post" action="manage-duas" enctype="multipart/form-data">
    <fieldset>
    <input type="submit" name="action" id="action" value="Cancel" title="Return to your PhysioNetWorks home page without submitting your data use agreement">
    &nbsp;<em>(Return to your PhysioNetWorks home page without submitting a data use agreement.)</em>
    </fieldset>
    </form>
    </article>
    </div>
</template>

<style scoped>

/* file: physionet.css */
/* new styles for superfish menus -- May 2016 */

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, del, dfn, em, font, img,
ins, kbd, q, s, samp, small, strike, strong, tt, code, var, b, u, i,
center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption,
tbody, tfoot, thead, tr, th, td {
 margin: 0; padding: 0; font-size: 100%; vertical-align: baseline;  border: 0;
 background: transparent;
} /* "code" added to list 24 Nov 2015  - KP */
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
table { border-collapse: collapse; border-spacing: 0; }

body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
       color: #444; font-size: 100%; background: #fff; margin: 0; }
a:link, a:visited { color: #369; }
a:hover { color: #39c; }

.hide, .pbanner { display: none; text-align: center; } /* text-align attribute added by KP, 24 Nov 2015 */
a img { border: none; }
.group:after { content: "."; display: block; height: 0; clear: both;
	       visibility: hidden; }

/* work around MSIE bugs */
* html #selector {
 filter: progid:DXimageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale src='image/image.png'); background-image: none; background-repeat: no-repeat; background-color: transparent; }
* html .group { height: 1%; }
* html #center_column {background:#fdfde0; width:65%; float:left}
* html div.fl { width: 45%; float: left; }
* html div.fr { width: 45%; float: right; }
* html img { width: 95% }
* html ul.nav li { list-style: none; margin-top: 0.8em;  margin-left: 2em;
	    text-indent: -2em; }
*:first-child+html ul.nav li { list-style: none; margin-top: 0.8em;
			       margin-left: 2em; text-indent: -2em; }
*:first-child+html .group { min-height: 1px; }
/* end of MSIE bug-fix section */

p { line-height: 1.4; padding: 0.5em; padding-left: 0; margin: 0.25em 0; max-width: 100% } 
/* #page > p:first-child { margin-top: 1em; }  added by KP Sept 2015 */
#page p { padding:  0.5em 1em; }
#page dl, #page ul, #page ol { line-height: 1.4; padding: 0.5em; padding-left: 1em; margin: 0.25em 0; max-width: 100% } /* dl, ul, ol added by KP 10 July 2015.  only within page div so as not to mess up superfish menus!  */
#page .topmenu img { display: none; } /* hide arrows on site map page. KP, 8 Oct 2015 */
p.plain { margin: 0.25em 1em; }
p.plain { line-height: 1.4; padding: 0.5em; padding-left: 0; margin: 0.25em 1em; max-width: 100% } /* added (to change previous line) by KP 29 Sept 2015 */
ul, ol {padding-bottom: .5em; padding-top: .5em; margin-bottom: .25em; } /*added by KP 29 June 2015 */
h1, h2, h3 { font-variant: small-caps; color: #080; background: #beb;
    	     padding: .2em 1em; margin: 0 0em; clear: both; } /* clear: both added by KP 9 June 2015 */
h2, h3 { margin-top: .75em;} /* added by KP 29 June 2015 */
h1, h2, h3, h4, h5, h6 { font-family: Georgia, Times, serif; }
h1 { font-size: 1.75em; text-align: center; padding-top: .4em;} /* padding-top added by KP 10 July 2015 - avoid collision with top banner */
h2 { font-size: 1.5em; }
h3 { font-size: 1.25em; }
h4 { font-size: 1em; font-variant: small-caps; margin-top: .75em;}

h1 tt, h2 tt, h3 tt { font-family: courier, monospace; font-variant: normal; }
h1 code, h2 code, h3 code { font-family: courier, monospace; font-variant: normal; } /* tt is deprecated; use code instead */
 /* blockquote is for the quotation, not the source. use class reference instead. KP 7/2015 */
blockquote { line-height: 1.2; padding: 0.5em; padding-left: 3em; padding-right: 3em }
.reference { line-height: 1.2;  padding: 0 3em .5em 3em; }
/* */
img { max-width: 100%; }
div > img { padding: 0.5em 1em 0em; }
li { margin-left: 1em; margin-bottom: 0.3em; text-indent: 0; }
ul > li { list-style: disc outside; }
ol > li { list-style: decimal outside; }
ol.a > li { list-style: lower-alpha; }
dt { font-weight: bold; padding-left: 1em; }
dd { margin: 0 0 0 4em; }
/*tt { font-size: .83em; } */
tt, code { font-size: 1.2em; }  /* changed by KP 6/2015 */
/* pre { background: #ffe; font-size: .83em; margin: 0 2em; display: block;
      border: 1px dotted; text-indent: 0; padding: 0.25em 1.5em; }*/
pre { background: #ffe; font-size: 1em; margin: 2em; display: block;
      border: 1px dotted; text-indent: 0; padding: 0.75em 1.5em; } /*changed by KP 6/2015 */
.pseudopre { font-family: monospace; background: #ffe; font-size: 1em; margin: 2em; display: block;
      border: 1px dotted; text-indent: 0; padding: 0.75em 1.5em; } /*changed by KP 6/2015 */
li > pre { margin: 0.5em 2em 0 1em; }
pre.code { background: #eee; }
small { font-size: .83em; }
td { padding-bottom: 0.75em; padding-left: 0.5em; padding-right: 0.5em }
td img { vertical-align: text-top; }
.breadcrumbs { float: left; padding: 0.25em; margin: 0.6em; background: #fff; } /* added by KP 7/2015 */

/* styles for forms, added by KP 12/2015  */
label { font-weight: normal;  padding: .4em .8em .2em 0; display: inline-block; min-width: 40%; text-align: right; }
fieldset { border: none; padding: 1em 0 1.5em 0; }

a[href^='https://'],
a[href^='http://'] { background: url(/icons/External.png) no-repeat center
		     right; padding-right: 1em; }
a.plain,
a[href^='https://physionet'],
a[href^='http://physionet'],
a[href^='http://www.physionet.org'] { background: none; padding-right: 0; }
a[href^='mailto:'] { background: url(/icons/Email.png) no-repeat left center;
		     padding-left: 1.25em; margin-left: 0.25em; }
a[href='#top'] { border-style: solid; border-width: thin; border-color: #694;
		  border-radius: 5px; color: #fff; background: #7c7; background: #694;
		  text-decoration: none; padding: 1px; padding: .2em .4em; font-size: .9em; margin-bottom: 2em; display: inline-block;} /* changed by KP 10/2015; additional change (bottom margin, display) 6/2016; changed by KP 19Jan2019: changed href^= to href=  */
a[href='#top']:active { border-width: medium; }
a[href='#top']:hover { color: #694; background: #fff; }  /* changed by KP 10/2015 */
a[name] { padding-top: 1em; }
/* :target { border-top: 2em solid #fff; margin-top: -2em;} */ /* commented out by KP 21 Aug 2015 -- does strange things */
:target {border-top: 2em solid transparent; background-clip: padding-box; margin-top: -2em;} /* so that anchored headers will appear under top banner */
.feed li { list-style: none; }


div.notice { width: 90%; margin: 2em auto; margin-bottom: 2em; padding: 2em; background: #cdf; } /*margin top and bottom adjusted  by KP 6/2015*/
div.figure { width: 90%; margin: auto; padding: 2em; border: 1px dotted; }
tr.ne { vertical-align: top; }
td.nd { white-space: nowrap; text-align: right; }
/* above styles on news.shtml page supplanted by those below. KP 8 Oct 2015 */
dt.nd { padding-top: .75em; }
td p { padding: 0; margin: 0; }
td.si { color: #fff; background: #a44; font-weight: bold; padding: 0;
	text-align:center; vertical-align: middle; }
p.pr { margin: 0 0 0 1em; text-indent: -1em }
p.prc { margin: 0.5em 0 0 1em; text-indent:-1em }
table.pnw { background: #ffffff; outline: 1px solid #a0a0a0; padding: 5px;
	    border: 3px solid #d0d0d0; }
table.acc { background: #ffffe0; outline: 1px solid #a0a0a0; padding: 5px;
	    border: 5px solid #ddddaa; }
input.red { -webkit-border-radius: 5px; -moz-border-radius: 5px;
	    border-radius: 5px; border: 1px solid gray; padding:1px 8px;
	    display:inline-block; text-decoration:none; background:#c02020;
	    color:#ffffff; cursor:pointer; font: 14px sans-serif; }
input.red:hover { text-decoration: none; background: #ff4040; cursor: pointer;
		  border: 1px solid #ff0000; }
a.button { -webkit-border-radius: 5px; -moz-border-radius: 5px;
	    border-radius: 5px; border: 1px solid gray; padding:1px 8px;
	    display:inline-block; text-decoration:none; background:#f0f0f0;
	    color:#444; cursor:pointer;
	    font: 14px sans-serif; font-size: .83em; }

 /* login styles added by KP, 29 Oct 2015 */
div.login { width: 60%;  padding: 1em 1.5em; border: solid 2px inherit; margin: 1.75em auto 1em auto; border-radius: 5px; border-radius: 10px; display: block; font-size: .9em;}
div.login input { color: #000; margin: 0 .5em .5em .5em;}

/* table of contents */
/* #toc { float: right; font-size: 10pt; width: 200px;
       padding: 10px 10px 10px 20px; background: #efffb1; 
       border: solid 1px #ccd136; margin: 0 -1em 10px 15px; border-radius: 5px; }
*/
/* adjust toc color to coordinate with header colors -- done in /head.shtml */
#toc { float: right; font-size: 10pt; max-width: 16em; width: 10em;
       padding: 1em 1.5em; margin: 0 .2em 1em 1em; border-radius: 5px; border-radius: 10px;} /* overrides */
#toc:before {
    content: "On this page:";
}
#toc li:first-child {
    margin-top: .5em;
}
#toc li ul {
    padding: .2em;
}
#toc li ul li:first-child {
    margin-top: .1em;
}
#toc a {
    text-decoration: none;
}
/***/
/* styles for quick links, news, and the like */
.quicklinks {
    background: #f5fcf3; border: 2px solid #694; border-radius: 10px; margin: 0px 0.2em .75em 1em;
}

.quicklinks .header {
    border-radius: 10px; border-bottom-right-radius: 0; border-bottom-left-radius: 0; font-size: 1.25em; font-variant: small-caps; color: #694; background: #daf3ce;  font-weight: bold; padding: 10px; font-family: Georgia, Times, serif; margin: 0;
}

/*** items below added May 2016 by KP, for accessible menus ***/

/*** menu styles ***/
/* just use sf-menu styles! */


/******************************/
/*** sf menu styles ***/

/*** ESSENTIAL STYLES ***/
.sf-menu, .sf-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
}
.sf-menu li {
    position: relative;
}
.sf-menu ul {
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    z-index: 99;
}
.sf-menu > li {
/*    float: left; */
}
.sf-menu li:hover > ul,
.sf-menu li.sfHover > ul {
    display: block;
}

.sf-menu a {
    display: block;
    position: relative;
}
.sf-menu ul ul {
    top: 0;
    left: 100%;
}

/*** END ESSENTIALS ***/

/* custom styles */
.sf-menu a { /* controls height of menu items */
    padding: .4em 1em;
    border-top: 1px solid #999;
}

.sf-menu li:hover,
.sf-menu li.sfHover {
    /* only transition out, not in */
    -webkit-transition: none;
    transition: none;
}
.sf-menu li:hover, 
.sf-menu li.sfHover,
.sf-menu a
{
/*	border-left: 0px solid #fff; from superfish.css */
    background: #daf3ce;
    color: #222;
    margin: 0;
    zoom: 1; /* IE7 */  
}
.sf-menu, .sf-menu ul, .sf-menu li { 
    list-style-type: none; 
    padding: 0; 
    margin: 0; 
}
.sf-menu { 
/*    	float: left; */
    position: relative; 
}
* html .sf-menu { 
    position: static; 
}
.sf-menu li {
    float: left; 
    background: #eee; 
    width: 100%;
    margin: 0;
    white-space: nowrap; /* no need for Supersubs plugin */
    white-space: normal; /* ...unless you support IE7 (let it wrap) */
    -webkit-transition: background .2s;
    transition: background .2s;
}
.sf-menu .pb, 
.sf-menu .pb li,
.sf-menu .pb a { 
    background: #dfe9ff; 
    color: #38388B; 
}
.sf-menu .pt, 
.sf-menu .pt li,
.sf-menu .pt a { 
    background: #fdc; 
    color: #8B3838; 
}
.sf-menu .pw, 
.sf-menu .pw li,
.sf-menu .pw a { 
    background: #eec; 
    color: #440; 
}
.sf-menu li a { 
    display: block; 
    font-size: 100%; 
    text-decoration: none; 
}
.sf-menu :hover,
.sf-menu :focus { 
    background: #fffff0; 
}
.sf-menu li:hover,
.sf-menu li:focus,
.sf-menu li a:hover
.sf-menu li a:focus { 
    position: relative; 
}
.sf-menu :hover > a,
.sf-menu :focus > a { 
    background: #fffff0; 
}

.sf-menu ul {
    box-shadow: 2px 2px 6px rgba(0,0,0,.2);
    min-width: 12em; /* allow long menu items to determine submenu width */
    width: 12em; /* no auto sub width for IE7, see white-space comment below */
}

.sf-menu ul,
.sf-menu :hover ul ul,
.sf-menu :focus ul ul,
.sf-menu :hover ul :hover ul ul,
.sf-menu :focus ul :focus ul ul,
.sf-menu :hover ul :hover ul :hover ul ul,
.sf-menu :focus ul :focus ul :focus ul ul { 
    position: absolute; 
    display: none; 
}

.sf-menu :hover ul,
.sf-menu :focus ul { 
/*	background: none; */
border: 1px solid #999;
border-top: none;
}

.sf-menu :hover li,
.sf-menu :hover li ul li, /* testing */
.sf-menu :hover ul :hover ul,
.sf-menu :focus ul :focus ul,
.sf-menu :hover ul :hover ul :hover ul,
.sf-menu :focus ul :focus ul :focus ul,
.sf-menu :hover ul :hover ul :hover ul :hover ul,
.sf-menu :focus ul :focus ul :focus ul :focus ul { 
    display: block; 
}

/* top level always shows */
.sf-menu > li > ul > li { display: none;}
.sf-menu > li { 
    display: block;
}

.sf-menu > li > a { 
    border: none;
    border: 1px solid transparent;
}

.sf-menu:hover > li > a {
    border: 1px solid #888;
    border-bottom: none;
}

.sf-menu ul li ul {
    border: 1px solid #888;
    border-top: 0px solid #888;
}

.sf-menu .pw .menu-note {
    text-align: right;
    padding: .4em 0;
    border-top: 4px double #888;
}

/* arrows; see https://css-tricks.com/snippets/css/css-triangle/ */

.arrow-down {
    width: 0; 
    height: 0; 
    border-left: .7em solid transparent;
    border-right: .7em solid transparent;
    border-top: .6em solid #369;
    border-top: .6em solid #888;
    line-height: 0px;
    position: absolute;
    right: .6em;
    top: .8em;
}

.arrow-right {
    width: 0; 
    height: 0; 
    border-top: .6em solid transparent;
    border-bottom: .6em solid transparent;
    border-left: .6em solid #369;
    border-left: .6em solid #888;
    position: absolute;
    right: .2em;
    top: .6em;
}

/********************************************************/
/* include styles from standard local.css file: */

#page {max-width: 9in; margin: 0 auto; padding-top: .25em;} /* padding and margin at top to line up with toc */
div.notice {margin-top: 1.25em; }
h1 { padding-top: .4em;}
h2, h3 { clear: none; }

/* center video: see http://stackoverflow.com/questions/3300660/how-do-i-center-an-image-if-its-wider-than-its-container */
div.outer {
    margin: 0 auto; 
    overflow: visible;
    width: 100%;  /* some width amount needed */ 
}
div.inner {
    position:relative;
    float: right; /* this was added and display removed */
    right: 50%;
}
div.inner img {
    position: relative; 
    right:-50%; /* this was changed from "left" in original */
    padding-bottom: 2em;
    z-index: 0;
}

div.outer2 {
    text-align: center;
    position: relative; 
/*    float: right;  */
    left: -50%; 
    width: 100%; /* if necessary, redefine the outer width locally, to equal width of image to be centered */
    margin: 1em auto;
}

div.outer2 + p {
   clear: both; /* keep paragraph following image from overlapping */
}

div.inner2 {
    position: relative; 
    left: 50%;
    overflow: hidden;
    z-index: -1; /* put it behind page navigation pane */
    padding-bottom: 1em;
}
/* table styles for crisdb */
div.rrtable table {
   margin: 1em auto;
}
div.rrtable th {
   padding: 0 .5em .75em .5em;
   text-align: center;
   vertical-align: bottom;
}
div.rrtable td {
   text-align: center;
}
div.rrtable tr.headerrow th {
   padding-bottom: 1em;
}

/* table styles for edb */
div.edbtable table {
   margin: 1em auto;
}
div.edbtable table table {
   margin: 1em 4em;
}
div.edbtable th {
   padding: 0 .5em .75em .5em;
   text-align: left;
   vertical-align: bottom;
}
div.edbtable {
   text-align: left;
}
div.edbtable tr.headerrow th {
   padding-bottom: 1em;
}

/* local index listing on software index page */
#index {
    padding: 1em 0 4em 0;
}
#index dl {
    padding: .4em 0;
}
#index dt {
    padding: .2em 1em;
}
#index th {
    padding: .6em 1em .6em 0;
    text-align: left;
}
/* styles for doi display */
/* adjust doi color to coordinate with header colors -- done in /head.shtml */
#doi { float: right; font-size: 10pt; max-width: 16em; width: 10em;
       padding: 1em 1.5em; background: #ecf3ff;
       border: solid 2px #44a; margin: 0 .2em 1em 1em; border-radius: 5px; border-radius: 10px; display: block; clear: both;} /* overrides */
#doi:before {
 /*  content: "DOI for this page:"; */
}
/* styles for table of contents (which is auto-generated) */
#tocwrapper {
    max-width: 15in;
    margin: 0 auto;
    float: right;
}
/* styles for citation boxes (bibtex syntax hidden by default) */
a.bibexpand {
    font-size: 80%;
    float: right;
}
.refwrap > pre.bib {
    display: none;
    margin: 0.5em 3em 1em 3em;
}
.refwrap:target > pre.bib {
    display: block;
}
/* adjust toc color to coordinate with header colors -- done in /head.shtml */
#toc { float: right; font-size: 10pt; max-width: 16em; width: 10em;
       padding: 1em 1.5em; margin: 0 .2em 1em 1em; border-radius: 5px; border-radius: 10px;} /* overrides */
#toc:before {
    content: "On this page:";
}
#toc li:first-child {
    margin-top: .5em;
}
#toc li ul {
    padding: .2em;
}
#toc li ul li:first-child {
    margin-top: .1em;
}
#toc a {
    text-decoration: none;
}
/***/
/* styles for breadcrumbs (top of page) */
.crumb {
    font-size: .9em;
}
.breadcrumbs {
    background: #fff9f6;
    border-radius: 2px;
    padding: .25em 1em;
}
/***/

pre {
    overflow: auto;
}
#page { max-width: 9in; } 

/* Challenge 2017 */
.challenge-final-yes {
    margin: 0.5em;
    border: 2px #440 solid;
    background: #cc9;
}
h1, h2, h3 { color: #440;
      background: #eec; }
      a[href^='http://physionet.org']
      { background: none; padding-right: 0; }
      body { background: #fffff0; }
      .sf-menu > li > a { background: #eec; }
</style>