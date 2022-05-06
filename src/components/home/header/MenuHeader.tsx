import React from 'react';

interface MenuHeaderProps {}

const MenuHeader: React.FC<MenuHeaderProps> = () => {
    return (
        <div className="menu-header">
            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header ">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar "></span>
                            <span className="icon-bar "></span>
                            <span className="icon-bar "></span>
                        </button>
                        <a className="navbar-brand" href="file:///E:/Xampp/htdocs/skyline/index.html" title="Skyline"><img src="./Home 1_files/sky-logo-header.png" alt="#"/></a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown ">
                                <a href="http://landing.engotheme.com/html/skyline/demo/index.html" title="Home" className="dropdown-toggle" data-toggle="dropdown">Home<b className="caret"></b></a>
                                <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/index.html" title="">Home 1</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/index_2.html" title="">Home 2</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/index_3.html" title="">Home 3</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/index_4.html" title="">Home 4</a></li>
                                </ul>
                            </li>
                            <li className="dropdown ">
                                <a href="http://landing.engotheme.com/html/skyline/demo/room_1.html" title="Room &amp; Rate" className="dropdown-toggle" data-toggle="dropdown">Room &amp; Rate<b className="caret"></b></a>
                                <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_1.html" title="">Room 1</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_2.html" title="">Room 2</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_3.html" title="">Room 3</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_4.html" title="">Room 4</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_5.html" title="">Room 5</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_6.html" title="">Room 6</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/room_detail.html" title="">Room Detail</a></li>
                                </ul>
                            </li>
                            <li className="dropdown ">
                                <a href="http://landing.engotheme.com/html/skyline/demo/index.html#" title="  Page" className="dropdown-toggle" data-toggle="dropdown">Page<b className="caret"></b></a>
                                <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/guestbook.html" title="">Guest Book</a></li>
                                    <li className="submenu-hover1">
                                        <a href="http://landing.engotheme.com/html/skyline/demo/event_page_1.html" className="dropdown-toggle" data-toggle="dropdown">Events <b className="caret"></b></a>
                                        <ul className="dropdown-menu dropdown-margin">
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/event_page_1.html">Events </a></li>
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/event_page_2.html">Events Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/attractions.html" title="">Attractions</a></li>
                                    <li className="submenu-hover1">
                                        <a href="http://landing.engotheme.com/html/skyline/demo/blog.html" className="dropdown-toggle" data-toggle="dropdown">Blog <b className="caret"></b></a>
                                        <ul className="dropdown-menu dropdown-margin">
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/blog.html">Blog </a></li>
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/blog_detail.html">Blog Detail</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu-hover1">
                                        <a href="http://landing.engotheme.com/html/skyline/demo/restaurant_1.html" className="dropdown-toggle" data-toggle="dropdown">Restaurant <b className="caret"></b></a>
                                        <ul className="dropdown-menu dropdown-margin">
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/restaurant_1.html">Restaurant 1</a></li>
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/restaurant_2.html">Restaurant 2</a></li>
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/restaurant_3.html">Restaurant 3</a></li>
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/restaurant_4.html">Restaurant 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu-hover1">
                                        <a href="http://landing.engotheme.com/html/skyline/demo/tems_condition_1.html" className="dropdown-toggle" data-toggle="dropdown">Tems Condition  <b className="caret"></b></a>
                                        <ul className="dropdown-menu dropdown-margin">
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/tems_condition_1.html">Tems Condition  1</a></li>
                                            <li><a href="http://landing.engotheme.com/html/skyline/demo/tems_condition_2.html">Tems Condition  2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/404_page.html" title="">404 Page</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/comming_soon.html" title="">Comming Soon</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/check_out.html" title="">Check Out</a></li>
                                </ul>
                            </li>
                            <li className="dropdown ">
                                <a href="http://landing.engotheme.com/html/skyline/demo/reservation_1.html" title="Reservation" className="dropdown-toggle" data-toggle="dropdown">RESERVATION<b className="caret"></b></a>
                                <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/reservation_1.html" title="">Reservation 1</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/reservation_2.html" title="">Reservation 2</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/reservation_3.html" title="">Reservation 3</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/reservation_4.html" title="">Reservation 4</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/reservation_5.html" title="">Reservation 5</a></li>
                                </ul>
                            </li>
                            <li className="dropdown ">
                                <a href="http://landing.engotheme.com/html/skyline/demo/gallery_1.html" title="Gallery" className="dropdown-toggle" data-toggle="dropdown">Gallery <b className="caret"></b></a>
                                <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/gallery_1.html" title="">Gallery 1</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/gallery_2.html" title="">Gallery 2</a></li>
                                    <li><a href="http://landing.engotheme.com/html/skyline/demo/gallery_3.html" title="">Gallery 3</a></li>
                                </ul>
                            </li>
                            <li><a href="http://landing.engotheme.com/html/skyline/demo/about.html" title="About">About</a></li>
                            <li><a href="http://landing.engotheme.com/html/skyline/demo/contact.html" title="Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MenuHeader;