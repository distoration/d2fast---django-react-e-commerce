import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'



import { Container, Row, Col } from 'react-bootstrap'
import Product from '../elements/Product'
import Loader from '../elements/Loader'
import Message from '../elements/Message'
import Paginate from '../elements/Paginate'
import ProductCarousel from '../elements/ProductCarousel'


import { listProducts } from '../actions/productActions'


function Mainscreen() {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  let keyword = location.search

  useEffect(() => {
      dispatch(listProducts(keyword))

  }, [dispatch, keyword])
  
  return (
    <div>
        <div class='container-fluid'>
        <div class="card">
                      <div class="card col-6 col-md-12">
                              <div class="card-content">
                                
                                  <div class="card-title">
                                  <h1 class="who-text">Conditions of Use📋</h1>&nbsp;&nbsp;&nbsp;                                        
                                  </div>
                                         <p><small> &nbsp;&nbsp;&nbsp;
                                        <h3>INTRODUCTION</h3>
                                             Welcome, these are the Terms and Conditions of Service (hereinafter, the “Terms”) for the website www.Charsid2.com (the “Site”), including its sub-domains and its mobile optimized versions, along with any products and services offered thereby. These Terms shall supplement our Privacy Policy (the “Policy”), incorporated herein by reference. The Site and the provided products and services are delivered by the Charsid2 Team (hereinafter referred to as “Charsid2”). The terms ‘us’, ‘its’, ‘ours’ and/or ‘we’, as used herein, refer to us, Charsid2 and/or our affiliates, assignees, successors and/or brands. As used herein, the terms ‘you’, ‘your’, and/or ‘yourself’ refer to you, a user/visitor/browser of our Site, whether registered under an account or not. By accessing this Site, you are agreeing to be bound by these web site terms and conditions of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these Terms, you are prohibited from using or accessing this Site. The materials contained in this Site are protected by applicable copyright and trade mark law.

                                        <br></br><br></br><br></br>
                                        <h3>SERVICES OFFERED</h3>
                                             Charsid2 is an online marketplace where users can buy digital virtual items sourced by us. Our Services include, but will not be limited to, promotion and delivery of virtual items and digital goods for video games, either single-player or online multiplayer. Accordingly, Charsid2 agrees to furnish its online market place services (the “Services”) to: (i) the visitors that browse the Site; (ii) buyers and sellers of goods registered into the Site; and (iii) any other users that have opened an account, all subject to the following Terms.
                                        <br></br><br></br><br></br>

                                        <h3>PERSONAL INFORMATION GATHERING</h3>
                                             We may collect both “Non-Personal Information” and “Personal Information” about you. “Non-Personal Information” includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, referring/exit pages and URLs, platform types, preferences you submit and preferences that are generated based on the data you submit and number of clicks. “Personal Information” includes information that can be used to personally identify you, such as your name, address, email address, nationality, home/business address, personal image (i.e. a picture of yourself incorporating your name and personal likeness), national identification, personal signature, mobile number and payment processing account details. In addition, we may also track information provided to us by your browser and mobile device IDs when you view or use the Service, such as the website you came from (known as the “referring URL”), the type of browser you use, the device from which you connected to the Service, the time and date of access, and other information that does not personally identify you. Subject to the terms and conditions of these Terms, and solely in order to use the Services, you are hereby granted a non-exclusive, limited, revocable, non-transferable authorization to use the Services use only as permitted by the features of the Services and by these Terms. Charsid2 reserves all rights not expressly granted herein in the Service. Charsid2 may terminate this authorization at any time for any reason or no reason.
                                        <br></br>

                                        <h3>UPDATES</h3>
                                             Charsid2 reserves the right to modify, amend, suspend, terminate, upgrade, update or otherwise modify these Terms, at any time and without notice. Any changes will be displayed in the Site, and we may notify you by email. Please refer to the last effective date where changes were last undertaken by us. Your use of our Services after the effective date of any update– either by an account registration or simple use – thereby indicates your acceptance thereof.

                                        <br></br><br></br><br></br>
                                        <h3>PAYMENTS</h3>
                                              We use worldwide accepted third-party payment processors to bill you through a payment account linked to you. You hereby authorize us the charging of fees through your indicated payment processing account. The processing of payments will be subject to the fees, terms, conditions and privacy policies of such payment processors. Charsid2 is not responsible for any and all errors, fees and currency conversions fees by the payment processor, and you should review its terms and policies from time to time, which will govern the provision of services to you. You must provide us valid and current billing information. If we detect any chargeback or if any payment is not received by us for any reason from your card or account, you will promptly pay us any and all amounts due to us upon notice. Any failure or inability by us to process any payment hereunder does not relieve you from your payment obligations. You can always contact our team with questions about your order, and we will strive to answer them and work together to solve any such doubts.

                                        <br></br><br></br><br></br>
                                        <h3>USER SUPPORT</h3>
                                            If you have any questions or complaints regarding the Site or our Services, please contact us by email as indicated in our contact web page. We will undertake our commercially reasonable efforts in order to answer as quickly as possible. You must provide us full details of your service query so that we can clearly identify your issue of concern.


                                        <br></br><br></br><br></br>
                                        <h3>CONTENT LICENSES</h3>
                                             Limited License. Subject to compliance with these Terms, Charsid2 grants you a limited, non-exclusive, revocable and non-transferable license to utilize and access the Services and any purchased virtual item and digital good, as applicable. You are prohibited from reselling, commercializing, duplicating, re-engineering, reverse engineering, modifying or otherwise using our virtual items and digital goods, in whole or in part. Charsid2 does not grant any express or implied right to you under any patents, trademarks, copyrights or trade secret information; and you shall have no right, either directly or indirectly, to own, use, loan, sell, rent, lease, license, sublicense, assign, copy, translate, modify, adapt, improve or create any new or derivative works from, or display, distribute, perform or in any way exploit any downloaded digital content pieces, in whole or in part. User Generated Content License. You hereby grant Charsid2 an unlimited, non-exclusive, sub-licensable, assignable, royalty-free, perpetual, irrevocable, for all the countries and territories through the world, right and license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes), communicate, publish, publicly perform, publicly display and distribute such any content you may upload, disseminate, deliver, create or transfer any post, original audio file, message, chat, files uploaded, data inputted, e-mails sent, or otherwise any content delivered to Charsid2 via the Site or the Services. You represent and warrant to Charsid2 that you have all rights, authorizations or otherwise hold sufficient title for any and all content submitted to Charsid2 as set forth herein.


                                            <br></br><br></br><br></br>
                                        <h3>COPYRIGHT AND CONTENT OWNERSHIP</h3>
                                        The trademarks, copyright, service marks, trademarks, registered service marks and/or registered trademarks, trade names and other intellectual property rights and proprietary notices displayed on the Site, and our products and services are the property of –or otherwise are licensed to Charsid2, its licensors or affiliates, or the respective title holders, whether acknowledged (or not), and which are protected under intellectual and proprietary rights in various jurisdictions throughout the world. You may not reproduce, modify, rent, lease, loan, sell, distribute, mirror, frame, republish, download, store on a retrieval system, transmit, or create derivative works of the website or its content, in whole or in part, by any means without the express written consent from Charsid2. Respective title holders may or may not be affiliated with us or our affiliates, partners and advertisers. No section hereof shall be construed as intent to grant to you any right transfer or interest in the Site and our products and services. For ease of understanding, ‘intellectual property rights’ shall mean any and all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals and extensions thereof, under the laws of applicable jurisdictions. You acknowledge and agree that any and all infringing use or exploitation of copyrighted content in the Site and our products and services may cause us, our affiliates, licensors or content providers irreparable injury, which may not be remedied solely at law, and therefore our affiliates, licensors or content providers may seek remedy for breach of this Policy, either in equity or through injunctive or other equitable relief.
                                            <br></br><br></br><br></br>

                                        <h3>CONTENT MODERATION</h3>
                                            Charsid2 encourages you to report violations of our Terms. Charsid2 has the right, but not the obligation, to monitor any activity and user generated content (e.g. names, photos, posts, feedback, images, comments, graphics, questions and other content) to determine compliance thereof, and to edit, refuse to post or remove any material or content submitted to or posted the Site that we find to be in violation of this Policy or that is otherwise objectionable. You acknowledge and agree that we may report any activity that we believe may violate any law to law enforcement, regulators or other relevant third parties, and that any violation of the aforementioned provisions may result in the immediate termination of your access to the Site and use of our products and services


                                            <br></br><br></br>
                                        <h3>SERVICE ELIGIBILITY</h3>
                                            Charsid2 encourages parents, legal guardians and responsible adults to be actively involved in the safe use of the Internet by children and minors. Charsid2 does not knowingly provide its Services to persons under the age of eighteen (18). If you are under such age, you may only use them, under the strict, direct and unequivocally express supervision of your parent or legal guardian. We reserve the right to request any and all applicable proof of identification and consent earthier from our users of from their legal parents or guardians, at any moment, without prior notice, and at our sole and final discretion. Charsid2 does not knowingly collect any kind of information from any person under the age of thirteen (13), and will delete any related information thereto.

                                            <br></br><br></br>
                                        <h3>PROHIBITED ACTIVITIES</h3>
                                            As our user, you agree to not undertake, motivate, or facilitate the use or access of the Site, the Products or the Services in order to: a. Infringe these Terms, or allow, encourage or facilitate others to do so. b. Plagiarize and/or infringe the intellectual property rights or privacy rights of any third party, including any breach of confidence, copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right. c. Distribute, post or otherwise make available any content that: (i) infringes or endangers the intellectual property rights of any person (e.g. trademark, moral rights, trade secret, copyright, ancillary rights or other); (ii) enables any act that could promote or cause discrimination, racism, harm, libel, hatred or violence against any individual or group; (iii) endangers children and underage persons; (iv) is or allows illegal or fraudulent activities to take place; (v) is or may constitute a criminal or capital offense or otherwise infringes any applicable law; and/or (vi) is or can be considered to be obscene, sexually explicit material, pornographic, threatening/defamatory, plagiarized, firearms, tobacco, alcohol, marijuana, gambling, binary options, Forex, pornographic or analogous material. d. Collect, receive, transfer or disseminate any personally identifiable information of any person without due consent from the title holder

                                            <br></br><br></br>
                                        <h3>TERM, TERMINATION</h3>
                                            The term hereof shall begin on the date that comes first among: (i) first access to the Site; (ii) your first access or execution of any of our Services; or (iii) Charsid2 begins providing its Services to you. The term hereof will automatically end on the earlier date of either your: (i) account deactivation or suspension; (ii) access termination or access revocation for our Services; (iii) Charsid2’ termination of these Terms, at its sole and final discretion; (iv) the termination date indicated by Charsid2 to you from time to time; or (v) Charsid2’ decision to make the Site or the Services no longer available for use, at its sole and final discretion.
                                            
                                            <br></br><br></br>
                                        <h3>USER PRIVACY</h3>
                                            By disclosing any data and personally identifying information to us, you agree to our Policy, including the collection, process, storage and disclosure of such personally identifiable information, including to our affiliates, partners and clients. We will ask for your express consent, including for inclusion into our newsletters, updates, and follow ups. For more information, please read our Policy.

                                            <br></br><br></br>
                                        <h3>DISCLAIMER OF WARRANTY</h3>
                                            To the fullest extent permissible under applicable law, the Site and the Services are provided to you “as is”, with “all faults” and “as available”, without warranty of any kind. Charsid2, and its affiliates, clients, agents, officers, licensors and/or distributors, do not make, and hereby disclaim, any and all express, implied or statutory warranties, either by statute, common law, custom, usage of trade, course of dealing or otherwise, however arising, including implied warranties of description, quality, fitness for a particular purpose, non-infringement, non-interference with use and/or enjoyment. Unless expressly indicated to the contrary by us, any and all virtual items and digital goods sold are legit and/or comply with the terms and conditions of the third parties that provide the video game, server environment or online marketplaces for such items and goods. Notwithstanding the foregoing, Charsid2 cannot be responsible for virtual items or digital goods which may result corrupted, formatted, made inaccessible or even deleted, through causes that include, but are not limited to, game drops, lags, rollbacks, patches, or transferring them by yourself. In no event shall Charsid2, its affiliates, clients, agents, officers, licensors, distributors and/or any authorized third party, be held liable for any special, indirect, incidental or consequential damages, including losses, costs or expenses of any kind resulting from possession, access, use, inaccessibility or malfunction of the Site or the Services, including but not limited to, loss of revenue, profits, business, loss of use or lack of availability of computer resources; whatsoever arising out of or related thereto, whether arising in tort (including negligence), contract, strict liability or other legal or equitable theory and whether or not Charsid2, its affiliates, clients, licensors and/or distributors have been advised of the possibility of such damages. However, we cannot be responsible for items which get lost through game drops, lags, rollbacks, patches, or transferring by yourself.
                                   
                                            <br></br><br></br>
                                        <h3>LIMITATION OF LIABILITY</h3>
                                            In no event shall Charsid2, or its affiliates, clients, licensors and/or distributors liability for all damages (except as required by applicable law) exceed the amount of USD$50.00 (Fifty United States Dollars); and henceforth any award for direct, provable damages shall not exceed such total amount. These Terms provide you specific legal rights, and you may have other rights that may vary from jurisdiction to jurisdiction. Legislation of some states/countries does not allow certain limitations of liability, and henceforth this limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction.

                                            <br></br><br></br>
                                        <h3>INDEMNIFICATION</h3>
                                            Force Majeure. Charsid2 shall not liable for any failure of performance on its obligations as set forth herein, where such failure arises from any cause beyond Charsid2 reasonable control, including but not limiting to, electronic, power, mechanic or Internet failure. Entire Agreement. These Terms set forth the entire agreement between the parties hereof and may not be altered or amended except in writing signed by each both parties. Language. These Terms may be translated into other languages, but English shall be and remain the official language of this agreement and in any conflict between the English language version and any other version, the English language version shall control. Newsletters. The Site may allow you to subscribe to our newsletter service, which may be provided by us or through an authorized third party. Through our newsletters, you may receive information according to your subscriber preferences. As our subscriber, you will receive a conspicuous communication indicating any subscription and you will be able to select the amount and type of emails received by you. If you wish to unsubscribe, you will find ‘unsubscribe’ and similar links on our communications. No Relationship. You and Charsid2 are independent contractors, and no agency, partnership, joint venture, employee-employer, or franchiser-franchisee relationship is intended or created by these Terms. No Waiver. Failure by Charsid2 to enforce any rights hereunder shall not be construed as a waiver of any rights with respect to the subject matter hereof. Severability. If any provision of these Terms is held unenforceable, then such provision will be modified to reflect the parties' intention. All remaining provisions of these Terms will remain in full force and effect.
                                        
                                            <br></br><br></br>
                                        <h3>APPLICABLE LAW, DISPUTE RESOLUTION</h3>
                                            Applicable Law. Your use of this Site and any cause of action, claim and/or dispute that might arise between the parties hereon, shall be subject to the laws of Poland, without regard to conflict of law principles. Waiver of Class Actions, Non-Individualized Relief. You acknowledge and accept that claims brought against Charsid2 shall be only on an individual basis and not as a plaintiff or class member in any possible future class or representative action or similar proceeding. Unless otherwise agreed by you and Charsid2, you may not adjoin or consolidate any claim with more than one person's; and you may not otherwise supervise or take over any form of a class, representative or consolidated proceeding. Waiver of Jury Trial. The parties herein waive their constitutional and statutory rights to go to court and have a trial in front of a judge or a jury, instead electing that all claims and disputes be resolved by a competent judge. Forum. You agree that any dispute arising from or relating to these Terms will be heard solely by a court or tribunal of competent jurisdiction in Poland. If you bring a dispute in a manner other than in accordance with this section, you agree that we may move to have it dismissed, and that you will be responsible for our reasonable attorney’s fees, court costs, and disbursements in doing so.
                                            
                                            <br></br><br></br>  
                                        <h3>HOW TO CONTACT US</h3>
                                            If you have any questions or queries about us, the Site, our Services or these Terms, please contact us via the contact form on our website.

                                            <br></br> <br></br> <br></br><br></br> <br></br>Date of last effective update is July, 2020.



                                    </small></p>

                              </div>
                          </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p class="bdr"></p>

                      <div class="card-footer row m-0">
                      </div>
            
                  </div>
              </div>
        </div>
  )
}

export default Mainscreen
