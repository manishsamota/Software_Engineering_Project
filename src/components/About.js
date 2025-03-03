import * as React from 'react'
import Header from './Header';
import Footer from './Footer';

function About() {

    return(
        <div>
<Header />
            
<section class="py-3 py-md-5">
  <div class="container mb-4 mb-md-5">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-xxl-8">
        <img class="img-fluid rounded shadow" loading="lazy" src="Home_Media_3.jpg" alt="About 3"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-2 gy-md-0 justify-content-xxl-center">
      <div class="col-12 order-md-1 col-md-8 col-xxl-6">
        <div class="text-center text-md-start">
          <h2 class="display-3 fw-bold lh-1">Manish Samota</h2>
          <p class="text-secondary fs-4 mb-2">Cyber Security Consultant</p>
          <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
<p> 
A Cyber Security Consultant with 2 years of experience specializes in risk assessment, penetration testing, 
and security audits. They help organizations identify vulnerabilities and implement defensive security measures.
Proficient in network security, cloud security, and incident response, they work to protect digital assets.
 Experienced in compliance frameworks like ISO 27001, NIST. Conducted vulnerability assessments and helped businesses enhance security policies. 
 Skilled in firewall configurations, endpoint protection, and security awareness training. 
 Assisted in incident response and forensic investigations to minimize cyber threats. 
 Hands-on experience with tools like Wireshark, Metasploit, Nessus, and Splunk. 
 Passionate about cybersecurity and staying ahead of evolving threats. 🚀
</p>
        </div>
      </div>
      
      
    </div>
  </div>
</section>
            <Footer />
        </div>
    );
}
export default About;
