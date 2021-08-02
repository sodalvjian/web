<template>
  <div class="p25 document-container">
    <h1>
      <a class="target-fix" name="Overview"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Mercury NLP - Overview</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Mercury NLP is a cloud-based version of the Melax Technologies Clinical
        Language Annotation Modeling and Processing (CLAMP) toolkit. Mercury NLP
        allows users to initiate real-time and batch clinical analysis against
        preset Natural Language Processing (NLP) pipelines, monitor and manage
        service provider billing and payment information, and perform password
        management. Mercury NLP seamlessly integrates with either a client or
        Melax Technologies Inc. supplied cloud solution.</span
      >
    </p>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Melax Technologies Inc. offers evaluation and licensed tier usage
        options for this product. The evaluation tier features a free Mercury
        NLP trial period. However, a license is required to ensure uninterrupted
        access to Mercury NLP.</span
      >
    </p>

    <h1 id="MercuryNLP-MercuryNLP-UserGuide">
      <span
        lang="EN-US"
        style='font-family:
"Arial",sans-serif'
        >Mercury NLP - User Guide</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The purpose of the Mercury NLP User Guide is to provide an overview of
        features, navigational tips and UI familiarity. Browse through the
        topics tree below for further information.</span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#Overview">Overview</a></span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#Login">Login</a></span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#Account-management"
          >User Account and Password Management</a
        ></span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#Feedback">Feedback</a></span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#Real-Time">Clinical Real-Time Analysis</a></span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#Batch">Clinical Batch Analysis</a></span
      >
    </p>

    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a href="#API">API Use</a></span
      >
    </p>

    <h1 id="MercuryNLP-MercuryNLP-Login">
      <a class="target-fix" name="Login"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span><span id="MercuryNLP-Login"></span></span>Mercury NLP -
        Login</span
      >
    </h1>

    <p>
      The Mercury NLP login and account creation screens offer ease of input and
      navigation experience.
    </p>
    <h4>Existing Users</h4>
    <p>
      If an account has been created, enter the associated email address and
      password, and click the “Sign-In” button.
    </p>
    <h4>New Users - Create New Account</h4>
    <p>
      <span
        >First-time users select the “Create New Account” link on the Mercury
        NLP login screen to start the registration process. Upon completion of
        the required information, a verification email will be sent. First-time
        users will be able to log in after verifying the email address using the
        URL provided in the verification email. Users that have not established
        payment information will be reminded of their trial period expiration
        when logging in.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'>
        <el-image
          style="width: 620px;"
          :src="imgList[0]"
          :preview-src-list="imgList"
        >
        </el-image>
      </span>
    </p>

    <!-- <h1 id="MercuryNLP-MercuryNLP-CreateAccount">
      <span
        lang="EN-US"
        style='font-family:
"Arial",sans-serif'
        ><span id="Create-Account"
          ><span id="MercuryNLP-Create-Account"></span></span
        >Mercury NLP - Create Account</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >First-time users can create an account by entering an email address,
        password, account name (Mercury NLP displays the specified account
        name), invitation code (when applicable), and indicating agreement with
        the terms described by the Privacy Policy.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'>
        <el-image
          style="width: 620px;"
          :src="imgList[1]"
          :preview-src-list="imgList"
        >
        </el-image>
      </span>
    </p> -->

    <!-- <h1 id="MercuryNLP-MercuryNLP-WelcometoMercuryNLP">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span id="Welcome"><span id="MercuryNLP-Welcome"></span></span>Mercury
        NLP - Welcome to Mercury NLP</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Upon successful login, the “Welcome to Mercury NLP” dialog will be
        presented to the user. However, users that have not specified payment
        information will receive a reminder that this information is required to
        ensure uninterrupted access to Mercury NLP.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[2]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p> -->

    <h1 id="MercuryNLP-MercuryNLP-UserAccountandPasswordManagement">
      <a name="Account-management" class="target-fix"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span><span id="MercuryNLP-Account-management"></span></span>Mercury
        NLP - User Account and Password Management</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><a class="mr-10" href="#Bills"
          ><strong
            ><span style='font-family:"Arial",sans-serif'
              >Bill &amp; Credits</span
            ></strong
          ></a
        >
        <a class="mr-10" href="#Payments"
          ><strong
            ><span style='font-family:"Arial",sans-serif'
              >Payments</span
            ></strong
          ></a
        ><strong><span style='font-family:"Arial",sans-serif'> </span></strong
        ><a class="mr-10" href="#Payment-information"
          ><strong
            ><span style='font-family:"Arial",sans-serif'
              >Payment Info</span
            ></strong
          ></a
        ><strong><span style='font-family:"Arial",sans-serif'> </span></strong
        ><a class="mr-10" href="#Security"
          ><strong
            ><span style='font-family:"Arial",sans-serif'
              >Account Security</span
            ></strong
          ></a
        ></span
      >
    </p>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The Mercury NLP User Account and Password Management feature offers a
        convenient way to manage and monitor service providers month-to-date and
        historical billing, service provider voucher credits, and user payment
        information. This feature also allows users to manage their passwords.
        Navigating to the User Account and Password Management screens entails
        either selecting the “Go to Account Settings” button in the “Welcome to
        Mercury NLP” dialog or by clicking on the displayed account name,
        followed by the selection of the “Accounts Setting” option from the
        displayed drop-down list.</span
      >
    </p>

    <h1 id="MercuryNLP-MercuryNLP-Bills&amp;Credits">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span id="Bills"><span id="MercuryNLP-Bills"></span></span>Mercury NLP
        - Bills &amp; Credits</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The Mercury NLP Bills & Credits functionality offers users the
        capability to monitor month-to-date service usage costs, voucher
        credits, preset NLP pipeline costs and a search function to view current
        and historical billing history.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[3]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>

    <h1 id="MercuryNLP-MercuryNLP-Payments">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span id="Payments"><span id="MercuryNLP-Payments"></span></span
        >Mercury NLP - Payments</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Mercury NLP offers users the capability to monitor Orders and Invoice
        payment history. Users can search current and historical Order and
        Invoice payment information.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[4]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>

    <h1 id="MercuryNLP-MercuryNLP-PaymentInformation">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span id="Payment-information"
          ><span id="MercuryNLP-Payment-information"></span></span
        >Mercury NLP - Payment Information</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Users are encouraged to provide payment information to facilitate
        uninterrupted access to Mercury NLP. Users may “opt-in” into automatic
        payments, which would result in a monthly usage charge applied to the
        specified credit card. Demographic and credit card information is
        managed and stored according to Personal Identifiable Identification
        (PII) and Payment Card Industry (PCI) industry standards.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[5]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>

    <h1 id="MercuryNLP-MercuryNLP-AccountSecurity">
      <span
        lang="EN-US"
        style='font-family:
"Arial",sans-serif'
        ><span id="Security"><span id="MercuryNLP-Security"></span></span
        >Mercury NLP - Account Security</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Mercury NLP offers users the capability to change passwords to enforce
        users' personal password aging policy.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[6]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>

    <h1 id="MercuryNLP-MercuryNLP-Feedback">
      <a name="Feedback" class="target-fix"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span><span id="MercuryNLP-Feedback"></span></span>Mercury NLP -
        Feedback</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Users can provide feedback regarding their Mercury NLP experience. This
        information shall be used to improve the product and will not establish
        a dialogue between the Mercury NLP team and the user. Users are
        encouraged to thoroughly review their feedback and ensure that it does
        not contain
        <strong
          ><span style='font-family:"Arial",sans-serif'
            >Protected Health Information (PHI)</span
          ></strong
        >
        or any sensitive data.
        <p>
          Users requiring support from the Mercury NLP team should establish
          contact through their designated support channel.
        </p>
        <p>
          Selecting the question mark icon located on the bottom right on any
          Mercury NLP screen initiates the feedback process. Users can provide
          scenario information which can include a query and/or observation. A
          user can paste a copy of generated results from a real-time or batch
          analysis execution in text format or a snapshot.
        </p>
      </span>
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[7]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>

    <h1 id="MercuryNLP-MercuryNLPClinicalReal-TimeAnalysis">
      <a name="Real-Time" class="target-fix"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span><span id="MercuryNLP-Real-Time"></span></span>Mercury NLP
        Clinical Real-Time Analysis</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The Mercury NLP clinical real-time analysis interface offers an
        intuitive layout and ease-of-use experience. After selecting the
        appropriate NLP pipeline and copying input from the desired source, a
        user then clicks the “Analysis” button to generate annotated results. A
        user can select desired visible entities within the annotated results
        through the use of the “Display Filter” option, and use the search
        option to review entity information.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[8]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>

    <h1 id="MercuryNLP-MercuryNLP-ClinicalBatchAnalysis">
      <a name="Batch" class="target-fix"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span><span id="MercuryNLP-Batch"></span></span>Mercury NLP - Clinical
        Batch Analysis</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The Mercury NLP Clinical Batch Analysis function offers convenience for
        authorized users to customize aspects of their experience. Clinical
        Batch Analysis is geared toward users with flexible time constraints or
        those desiring the ability to specify source and destination targets for
        input text and annotated text results respectively.
      </span>
    </p>
    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[11]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>
    <p>Users may create a new batch job, or search for an existing job.</p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[12]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>
    <h4>Create a New Batch Job</h4>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Select the “Create a Job” button to access the “New Job” screen.
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Enter the desired job name followed by the selection of a pipeline from
        the dropdown menu.
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >In the “Input Data” section, enter the AWS S3 location of an existing
        input text file folder, as depicted in provided example’s format. If
        this section is input incorrectly, a message will show. Please check
        your S3 location against the example.
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >To ensure that data transfers between Mercury NLP and AWS S3 are
        encrypted, the user should enable the encryption slider. Please note,
        this option will increase processing time a little.
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <el-image
        style="width: 620px;"
        :src="imgList[13]"
        :preview-src-list="imgList"
      >
      </el-image>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Once the bucket location is entered, a message will confirm that authorization was successful. 
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >If authorization fails, grant access to the AWS S3 location by copying and pasting and saving the JSON code provided to the AWS S3 bucket policy Permissions section. Go back to the Mercury NLP New Job screen and click verify again.
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <el-image
        style="width: 620px;"
        :src="imgList[14]"
        :preview-src-list="imgList"
      >
      </el-image>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <el-image
        style="width: 620px;"
        :src="imgList[15]"
        :preview-src-list="imgList"
      >
      </el-image>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Select the “Confirm” button. The selected pipeline will start to process the files in the provided “Input Data” S3 location and the output will be populated by Mercury NLP to the “Output Data” S3 location, which is read-only. The completed batch will be saved to the same S3 bucket like the one selected for the batch job. 
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Batch job progress will be shown as below:
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <el-image
        style="width: 620px;"
        :src="imgList[16]"
        :preview-src-list="imgList"
      >
      </el-image>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <el-image
        style="width: 620px;"
        :src="imgList[17]"
        :preview-src-list="imgList"
      >
      </el-image>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The job details page provides information about the job’s progress and will provide detail if any of the files in the batch exceeded limits (10MB). The cost of the batch job also shows on this page.
      </span>
    </p>
    <h4>Search a Batch Job</h4>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Enter the desired “batch job” name into the search field and select the magnifying glass to initiate a search. When the job is found, the “Batch Analysis” screen will populate. 
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >The screen will show the status of any jobs in progress.
      </span>
    </p>
    <p style="margin-left:36.0pt;text-indent:-18.0pt">
      <span lang="EN-US" style="font-size:10.0pt;font-family:Symbol"
        >·<span style='font:7.0pt "Times New Roman"'
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span
      ><span lang="EN-US" style='font-family:"Arial",sans-serif'
        >By clicking on a completed job users will see batch detail, including cost and errors if any. For example, files exceeding 10MB cannot be processed.
      </span>
    </p>

    <h1 id="MercuryNLP-MercuryNLP-API">
      <a name="API" class="target-fix"></a>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><span><span id="MercuryNLP-API"></span></span>Mercury NLP -API</span
      >
    </h1>

    <p>
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        >Authorized users are able to integrate clinical analysis functionality into their applications through the use of the Mercury NLP API. Users are encouraged to thoroughly reviewed the available documentation to ensure an optimal user experience.</span
      >
    </p>

    <p class="MsoNormal">
      <span lang="EN-US" style='font-family:"Arial",sans-serif'
        ><el-image
          style="width: 620px;"
          :src="imgList[10]"
          :preview-src-list="imgList"
        >
        </el-image
      ></span>
    </p>
  </div>
</template>

<script>
import image1 from '@/assets/img/document/image1.png'
import image2 from '@/assets/img/document/image2.png'
import image3 from '@/assets/img/document/image3.png'
import image4 from '@/assets/img/document/image4.png'
import image5 from '@/assets/img/document/image5.png'
import image6 from '@/assets/img/document/image6.png'
import image7 from '@/assets/img/document/image7.png'
import image8 from '@/assets/img/document/image8.png'
import image9 from '@/assets/img/document/image9.png'
import image10 from '@/assets/img/document/image10.png'
import image11 from '@/assets/img/document/image11.png'
import imageBatch1 from '@/assets/img/document/batch_1.png'
import imageBatch2 from '@/assets/img/document/batch_2.png'
import imageBatch3 from '@/assets/img/document/batch_3.png'
import imageBatch4 from '@/assets/img/document/batch_4.png'
import imageBatch5 from '@/assets/img/document/batch_5.png'
import imageBatch6 from '@/assets/img/document/batch_6.png'
import imageBatch7 from '@/assets/img/document/batch_7.png'
export default {
  name: '',
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      imgList: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        imageBatch1,
        imageBatch2,
        imageBatch3,
        imageBatch4,
        imageBatch5,
        imageBatch6,
        imageBatch7
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      const target = location.pathname + location.hash
      setTimeout(() => {
        location.href = target
      }, 300)
    })
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.document-container {
  line-height: 1.5;
}
a {
  color: #3688ff;
}
.target-fix {
  position: relative;
  top: -60px;
  display: block;
  height: 0;
  overflow: hidden;
}
</style>
