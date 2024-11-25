import React from 'react'

export default function Sec4() {
  return (
    <div>
        <div class='footer'>
            <div class='container'>     
                <div class='row'>                       
                    <div class='col-lg-4 col-sm-4 col-xs-12'>
                        <div class='single_footer'>
                            <h4>Services</h4>
                            <ul>
                                <li><a>Lorem Ipsum</a></li>
                                <li><a>Simply dummy text</a></li>
                                <li><a>The printing and typesetting </a></li>
                                <li><a>Standard dummy text</a></li>
                                <li><a>Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class='col-md-4 col-sm-4 col-xs-12'>
                        <div class='single_footer single_footer_address'>
                            <h4>Page Link</h4>
                            <ul>
                                <li><a>Lorem Ipsum</a></li>
                                <li><a>Simply dummy text</a></li>
                                <li><a>The printing and typesetting </a></li>
                                <li><a>Standard dummy text</a></li>
                                <li><a>Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    {/* <input type="text" class="subscribe__input" placeholder="Enter Email Address"> */}
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div>         
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2019 <a href="#">Akdesign</a>.</p>
                    </div>                
                </div>                
            </div>
        </div>
    </div>
  )
}
