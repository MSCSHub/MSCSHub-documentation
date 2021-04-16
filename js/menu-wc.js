'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mscshub-documentation documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b18d4d96183e82391bb2fddc40c17517"' : 'data-target="#xs-components-links-module-AppModule-b18d4d96183e82391bb2fddc40c17517"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b18d4d96183e82391bb2fddc40c17517"' :
                                            'id="xs-components-links-module-AppModule-b18d4d96183e82391bb2fddc40c17517"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseGridCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseGridCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateReviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogNotLoggedIn.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogNotLoggedIn</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogNotVerified.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogNotVerified</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogOnDelete.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogOnDelete</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogReviewSubmission.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogReviewSubmission</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogSendFeedback.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogSendFeedback</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCourseMetadataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditCourseMetadataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NothingHereComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NothingHereComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PandaPartyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PandaPartyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewHelpfulnessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewHelpfulnessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SadPandaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SadPandaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarRatingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StarRatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThankyouComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThankyouComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewUserReviewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewUserReviewsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassService.html" data-type="entity-link">ClassService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomIconRegistry.html" data-type="entity-link">CustomIconRegistry</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuardGuard.html" data-type="entity-link">AdminGuardGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthguardGuard.html" data-type="entity-link">AuthguardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClassData.html" data-type="entity-link">ClassData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FbUser.html" data-type="entity-link">FbUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IClass.html" data-type="entity-link">IClass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReview.html" data-type="entity-link">IReview</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Review.html" data-type="entity-link">Review</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SvgIconInfo.html" data-type="entity-link">SvgIconInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SvgIconMap.html" data-type="entity-link">SvgIconMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});