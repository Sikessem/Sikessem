<?php

use App\Http\Controllers\form_layouts\HorizontalForm;
use App\Http\Controllers\form_layouts\StickyActions;
use App\Http\Controllers\form_layouts\VerticalForm;
use App\Http\Controllers\form_validation\Validation;
use App\Http\Controllers\form_wizard\Icons as FormWizardIcons;
use App\Http\Controllers\form_wizard\Numbered as FormWizardNumbered;
use App\Http\Controllers\Vuexy\AcademyCourse;
use App\Http\Controllers\Vuexy\AcademyCourseDetails;
use App\Http\Controllers\Vuexy\AcademyDashboard;
use App\Http\Controllers\Vuexy\AccessPermission;
use App\Http\Controllers\Vuexy\AccessRoles;
use App\Http\Controllers\Vuexy\Auth\ForgotPasswordBasic;
use App\Http\Controllers\Vuexy\Auth\ForgotPasswordCover;
use App\Http\Controllers\Vuexy\Auth\LoginBasic;
use App\Http\Controllers\Vuexy\Auth\LoginCover;
use App\Http\Controllers\Vuexy\Auth\RegisterBasic;
use App\Http\Controllers\Vuexy\Auth\RegisterCover;
use App\Http\Controllers\Vuexy\Auth\RegisterMultiSteps;
use App\Http\Controllers\Vuexy\Auth\ResetPasswordBasic;
use App\Http\Controllers\Vuexy\Auth\ResetPasswordCover;
use App\Http\Controllers\Vuexy\Auth\TwoStepsBasic;
use App\Http\Controllers\Vuexy\Auth\TwoStepsCover;
use App\Http\Controllers\Vuexy\Auth\VerifyEmailBasic;
use App\Http\Controllers\Vuexy\Auth\VerifyEmailCover;
use App\Http\Controllers\Vuexy\Calendar;
use App\Http\Controllers\Vuexy\Cards\CardActions;
use App\Http\Controllers\Vuexy\Cards\CardAdvance;
use App\Http\Controllers\Vuexy\Cards\CardAnalytics;
use App\Http\Controllers\Vuexy\Cards\CardBasic;
use App\Http\Controllers\Vuexy\Cards\CardGamifications;
use App\Http\Controllers\Vuexy\Cards\CardStatistics;
use App\Http\Controllers\Vuexy\Charts\ApexCharts;
use App\Http\Controllers\Vuexy\Charts\ChartJs;
use App\Http\Controllers\Vuexy\Chat;
use App\Http\Controllers\Vuexy\Dashboard\Analytics;
use App\Http\Controllers\Vuexy\Dashboard\Crm;
use App\Http\Controllers\Vuexy\EcommerceCustomerAll;
use App\Http\Controllers\Vuexy\EcommerceCustomerDetailsBilling;
use App\Http\Controllers\Vuexy\EcommerceCustomerDetailsNotifications;
use App\Http\Controllers\Vuexy\EcommerceCustomerDetailsOverview;
use App\Http\Controllers\Vuexy\EcommerceCustomerDetailsSecurity;
use App\Http\Controllers\Vuexy\EcommerceDashboard;
use App\Http\Controllers\Vuexy\EcommerceManageReviews;
use App\Http\Controllers\Vuexy\EcommerceOrderDetails;
use App\Http\Controllers\Vuexy\EcommerceOrderList;
use App\Http\Controllers\Vuexy\EcommerceProductAdd;
use App\Http\Controllers\Vuexy\EcommerceProductCategory;
use App\Http\Controllers\Vuexy\EcommerceProductList;
use App\Http\Controllers\Vuexy\EcommerceReferrals;
use App\Http\Controllers\Vuexy\EcommerceSettingsCheckout;
use App\Http\Controllers\Vuexy\EcommerceSettingsDetails;
use App\Http\Controllers\Vuexy\EcommerceSettingsLocations;
use App\Http\Controllers\Vuexy\EcommerceSettingsNotifications;
use App\Http\Controllers\Vuexy\EcommerceSettingsPayments;
use App\Http\Controllers\Vuexy\EcommerceSettingsShipping;
use App\Http\Controllers\Vuexy\Email;
use App\Http\Controllers\Vuexy\Form\Elements\BasicInput;
use App\Http\Controllers\Vuexy\Form\Elements\CustomOptions;
use App\Http\Controllers\Vuexy\Form\Elements\Editors;
use App\Http\Controllers\Vuexy\Form\Elements\Extras;
use App\Http\Controllers\Vuexy\Form\Elements\FileUpload;
use App\Http\Controllers\Vuexy\Form\Elements\InputGroups;
use App\Http\Controllers\Vuexy\Form\Elements\Picker;
use App\Http\Controllers\Vuexy\Form\Elements\Selects;
use App\Http\Controllers\Vuexy\Form\Elements\Sliders;
use App\Http\Controllers\Vuexy\Form\Elements\Switches;
use App\Http\Controllers\Vuexy\FrontPages\Checkout;
use App\Http\Controllers\Vuexy\FrontPages\HelpCenter;
use App\Http\Controllers\Vuexy\FrontPages\HelpCenterArticle;
use App\Http\Controllers\Vuexy\FrontPages\Landing;
use App\Http\Controllers\Vuexy\FrontPages\Payment;
use App\Http\Controllers\Vuexy\FrontPages\Pricing;
use App\Http\Controllers\Vuexy\Icons\FontAwesome;
use App\Http\Controllers\Vuexy\Icons\Tabler;
use App\Http\Controllers\Vuexy\InvoiceAdd;
use App\Http\Controllers\Vuexy\InvoiceEdit;
use App\Http\Controllers\Vuexy\InvoiceList;
use App\Http\Controllers\Vuexy\InvoicePreview;
use App\Http\Controllers\Vuexy\InvoicePrint;
use App\Http\Controllers\Vuexy\Kanban;
use App\Http\Controllers\Vuexy\Layouts\Blank;
use App\Http\Controllers\Vuexy\Layouts\CollapsedMenu;
use App\Http\Controllers\Vuexy\Layouts\Container;
use App\Http\Controllers\Vuexy\Layouts\ContentNavbar;
use App\Http\Controllers\Vuexy\Layouts\ContentNavSidebar;
use App\Http\Controllers\Vuexy\Layouts\Fluid;
use App\Http\Controllers\Vuexy\Layouts\Horizontal;
use App\Http\Controllers\Vuexy\Layouts\NavbarFull;
use App\Http\Controllers\Vuexy\Layouts\NavbarFullSidebar;
use App\Http\Controllers\Vuexy\Layouts\Vertical;
use App\Http\Controllers\Vuexy\Layouts\WithoutMenu;
use App\Http\Controllers\Vuexy\Layouts\WithoutNavbar;
use App\Http\Controllers\Vuexy\LogisticsDashboard;
use App\Http\Controllers\Vuexy\LogisticsFleet;
use App\Http\Controllers\Vuexy\Maps\Leaflet;
use App\Http\Controllers\Vuexy\Modal\ModalExample;
use App\Http\Controllers\Vuexy\Pages\AccountSettingsAccount;
use App\Http\Controllers\Vuexy\Pages\AccountSettingsBilling;
use App\Http\Controllers\Vuexy\Pages\AccountSettingsConnections;
use App\Http\Controllers\Vuexy\Pages\AccountSettingsNotifications;
use App\Http\Controllers\Vuexy\Pages\AccountSettingsSecurity;
use App\Http\Controllers\Vuexy\Pages\Faq;
use App\Http\Controllers\Vuexy\Pages\MiscComingSoon;
use App\Http\Controllers\Vuexy\Pages\MiscError;
use App\Http\Controllers\Vuexy\Pages\MiscNotAuthorized;
use App\Http\Controllers\Vuexy\Pages\MiscUnderMaintenance;
use App\Http\Controllers\Vuexy\Pages\Pricing as PagesPricing;
use App\Http\Controllers\Vuexy\Pages\UserConnections;
use App\Http\Controllers\Vuexy\Pages\UserProfile;
use App\Http\Controllers\Vuexy\Pages\UserProjects;
use App\Http\Controllers\Vuexy\Pages\UserTeams;
use App\Http\Controllers\Vuexy\Tables\Basic as TablesBasic;
use App\Http\Controllers\Vuexy\Tables\DatatableAdvanced;
use App\Http\Controllers\Vuexy\Tables\DatatableBasic;
use App\Http\Controllers\Vuexy\Tables\DatatableExtensions;
use App\Http\Controllers\Vuexy\UI\Accordion;
use App\Http\Controllers\Vuexy\UI\Alerts;
use App\Http\Controllers\Vuexy\UI\Badges;
use App\Http\Controllers\Vuexy\UI\Buttons;
use App\Http\Controllers\Vuexy\UI\Carousel;
use App\Http\Controllers\Vuexy\UI\Collapse;
use App\Http\Controllers\Vuexy\UI\Dropdowns;
use App\Http\Controllers\Vuexy\UI\Extended\Avatar;
use App\Http\Controllers\Vuexy\UI\Extended\BlockUI;
use App\Http\Controllers\Vuexy\UI\Extended\DragAndDrop;
use App\Http\Controllers\Vuexy\UI\Extended\MediaPlayer;
use App\Http\Controllers\Vuexy\UI\Extended\Misc;
use App\Http\Controllers\Vuexy\UI\Extended\PerfectScrollbar;
use App\Http\Controllers\Vuexy\UI\Extended\StarRatings;
use App\Http\Controllers\Vuexy\UI\Extended\SweetAlert;
use App\Http\Controllers\Vuexy\UI\Extended\TextDivider;
use App\Http\Controllers\Vuexy\UI\Extended\TimelineBasic;
use App\Http\Controllers\Vuexy\UI\Extended\TimelineFullscreen;
use App\Http\Controllers\Vuexy\UI\Extended\Tour;
use App\Http\Controllers\Vuexy\UI\Extended\Treeview;
use App\Http\Controllers\Vuexy\UI\Footer;
use App\Http\Controllers\Vuexy\UI\ListGroups;
use App\Http\Controllers\Vuexy\UI\Modals;
use App\Http\Controllers\Vuexy\UI\Navbar;
use App\Http\Controllers\Vuexy\UI\Offcanvas;
use App\Http\Controllers\Vuexy\UI\PaginationBreadcrumbs;
use App\Http\Controllers\Vuexy\UI\Progress;
use App\Http\Controllers\Vuexy\UI\Spinners;
use App\Http\Controllers\Vuexy\UI\TabsPills;
use App\Http\Controllers\Vuexy\UI\Toasts;
use App\Http\Controllers\Vuexy\UI\TooltipsPopovers;
use App\Http\Controllers\Vuexy\UI\Typography;
use App\Http\Controllers\Vuexy\UserList;
use App\Http\Controllers\Vuexy\UserManagement;
use App\Http\Controllers\Vuexy\UserViewAccount;
use App\Http\Controllers\Vuexy\UserViewBilling;
use App\Http\Controllers\Vuexy\UserViewConnections;
use App\Http\Controllers\Vuexy\UserViewNotifications;
use App\Http\Controllers\Vuexy\UserViewSecurity;
use App\Http\Controllers\Vuexy\Wizard\Checkout as WizardCheckout;
use App\Http\Controllers\Vuexy\Wizard\CreateDeal;
use App\Http\Controllers\Vuexy\Wizard\PropertyListing;
use Illuminate\Support\Facades\Route;

// Main Page Route
Route::get('/dashboard/analytics', [Analytics::class, 'index'])->name('dashboard-analytics');
Route::get('/dashboard/crm', [Crm::class, 'index'])->name('dashboard-crm');

// layout
Route::get('/layouts/collapsed-menu', [CollapsedMenu::class, 'index'])->name('layouts-collapsed-menu');
Route::get('/layouts/content-navbar', [ContentNavbar::class, 'index'])->name('layouts-content-navbar');
Route::get('/layouts/content-nav-sidebar', [ContentNavSidebar::class, 'index'])->name('layouts-content-nav-sidebar');
Route::get('/layouts/navbar-full', [NavbarFull::class, 'index'])->name('layouts-navbar-full');
Route::get('/layouts/navbar-full-sidebar', [NavbarFullSidebar::class, 'index'])->name('layouts-navbar-full-sidebar');
Route::get('/layouts/horizontal', [Horizontal::class, 'index'])->name('dashboard-analytics');
Route::get('/layouts/vertical', [Vertical::class, 'index'])->name('dashboard-analytics');
Route::get('/layouts/without-menu', [WithoutMenu::class, 'index'])->name('layouts-without-menu');
Route::get('/layouts/without-navbar', [WithoutNavbar::class, 'index'])->name('layouts-without-navbar');
Route::get('/layouts/fluid', [Fluid::class, 'index'])->name('layouts-fluid');
Route::get('/layouts/container', [Container::class, 'index'])->name('layouts-container');
Route::get('/layouts/blank', [Blank::class, 'index'])->name('layouts-blank');

// Front Pages
Route::get('/front-pages/landing', [Landing::class, 'index'])->name('front-pages-landing');
Route::get('/front-pages/pricing', [Pricing::class, 'index'])->name('front-pages-pricing');
Route::get('/front-pages/payment', [Payment::class, 'index'])->name('front-pages-payment');
Route::get('/front-pages/checkout', [Checkout::class, 'index'])->name('front-pages-checkout');
Route::get('/front-pages/help-center', [HelpCenter::class, 'index'])->name('front-pages-help-center');
Route::get('/front-pages/help-center-article', [HelpCenterArticle::class, 'index'])->name('front-pages-help-center-article');

// apps
Route::get('/app/email', [Email::class, 'index'])->name('app-email');
Route::get('/app/chat', [Chat::class, 'index'])->name('app-chat');
Route::get('/app/calendar', [Calendar::class, 'index'])->name('app-calendar');
Route::get('/app/kanban', [Kanban::class, 'index'])->name('app-kanban');
Route::get('/app/ecommerce/dashboard', [EcommerceDashboard::class, 'index'])->name('app-ecommerce-dashboard');
Route::get('/app/ecommerce/product/list', [EcommerceProductList::class, 'index'])->name('app-ecommerce-product-list');
Route::get('/app/ecommerce/product/add', [EcommerceProductAdd::class, 'index'])->name('app-ecommerce-product-add');
Route::get('/app/ecommerce/product/category', [EcommerceProductCategory::class, 'index'])->name('app-ecommerce-product-category');
Route::get('/app/ecommerce/order/list', [EcommerceOrderList::class, 'index'])->name('app-ecommerce-order-list');
Route::get('app/ecommerce/order/details', [EcommerceOrderDetails::class, 'index'])->name('app-ecommerce-order-details');
Route::get('/app/ecommerce/customer/all', [EcommerceCustomerAll::class, 'index'])->name('app-ecommerce-customer-all');
Route::get('app/ecommerce/customer/details/overview', [EcommerceCustomerDetailsOverview::class, 'index'])->name('app-ecommerce-customer-details-overview');
Route::get('app/ecommerce/customer/details/security', [EcommerceCustomerDetailsSecurity::class, 'index'])->name('app-ecommerce-customer-details-security');
Route::get('app/ecommerce/customer/details/billing', [EcommerceCustomerDetailsBilling::class, 'index'])->name('app-ecommerce-customer-details-billing');
Route::get('app/ecommerce/customer/details/notifications', [EcommerceCustomerDetailsNotifications::class, 'index'])->name('app-ecommerce-customer-details-notifications');
Route::get('/app/ecommerce/manage/reviews', [EcommerceManageReviews::class, 'index'])->name('app-ecommerce-manage-reviews');
Route::get('/app/ecommerce/referrals', [EcommerceReferrals::class, 'index'])->name('app-ecommerce-referrals');
Route::get('/app/ecommerce/settings/details', [EcommerceSettingsDetails::class, 'index'])->name('app-ecommerce-settings-details');
Route::get('/app/ecommerce/settings/payments', [EcommerceSettingsPayments::class, 'index'])->name('app-ecommerce-settings-payments');
Route::get('/app/ecommerce/settings/checkout', [EcommerceSettingsCheckout::class, 'index'])->name('app-ecommerce-settings-checkout');
Route::get('/app/ecommerce/settings/shipping', [EcommerceSettingsShipping::class, 'index'])->name('app-ecommerce-settings-shipping');
Route::get('/app/ecommerce/settings/locations', [EcommerceSettingsLocations::class, 'index'])->name('app-ecommerce-settings-locations');
Route::get('/app/ecommerce/settings/notifications', [EcommerceSettingsNotifications::class, 'index'])->name('app-ecommerce-settings-notifications');
Route::get('/app/academy/dashboard', [AcademyDashboard::class, 'index'])->name('app-academy-dashboard');
Route::get('/app/academy/course', [AcademyCourse::class, 'index'])->name('app-academy-course');
Route::get('/app/academy/course-details', [AcademyCourseDetails::class, 'index'])->name('app-academy-course-details');
Route::get('/app/logistics/dashboard', [LogisticsDashboard::class, 'index'])->name('app-logistics-dashboard');
Route::get('/app/logistics/fleet', [LogisticsFleet::class, 'index'])->name('app-logistics-fleet');
Route::get('/app/invoice/list', [InvoiceList::class, 'index'])->name('app-invoice-list');
Route::get('/app/invoice/preview', [InvoicePreview::class, 'index'])->name('app-invoice-preview');
Route::get('/app/invoice/print', [InvoicePrint::class, 'index'])->name('app-invoice-print');
Route::get('/app/invoice/edit', [InvoiceEdit::class, 'index'])->name('app-invoice-edit');
Route::get('/app/invoice/add', [InvoiceAdd::class, 'index'])->name('app-invoice-add');
Route::get('/app/user/list', [UserList::class, 'index'])->name('app-user-list');
Route::get('/app/user/view/account', [UserViewAccount::class, 'index'])->name('app-user-view-account');
Route::get('/app/user/view/security', [UserViewSecurity::class, 'index'])->name('app-user-view-security');
Route::get('/app/user/view/billing', [UserViewBilling::class, 'index'])->name('app-user-view-billing');
Route::get('/app/user/view/notifications', [UserViewNotifications::class, 'index'])->name('app-user-view-notifications');
Route::get('/app/user/view/connections', [UserViewConnections::class, 'index'])->name('app-user-view-connections');
Route::get('/app/access-roles', [AccessRoles::class, 'index'])->name('app-access-roles');
Route::get('/app/access-permission', [AccessPermission::class, 'index'])->name('app-access-permission');

// pages
Route::get('/pages/profile-user', [UserProfile::class, 'index'])->name('pages-profile-user');
Route::get('/pages/profile-teams', [UserTeams::class, 'index'])->name('pages-profile-teams');
Route::get('/pages/profile-projects', [UserProjects::class, 'index'])->name('pages-profile-projects');
Route::get('/pages/profile-connections', [UserConnections::class, 'index'])->name('pages-profile-connections');
Route::get('/pages/account-settings-account', [AccountSettingsAccount::class, 'index'])->name('pages-account-settings-account');
Route::get('/pages/account-settings-security', [AccountSettingsSecurity::class, 'index'])->name('pages-account-settings-security');
Route::get('/pages/account-settings-billing', [AccountSettingsBilling::class, 'index'])->name('pages-account-settings-billing');
Route::get('/pages/account-settings-notifications', [AccountSettingsNotifications::class, 'index'])->name('pages-account-settings-notifications');
Route::get('/pages/account-settings-connections', [AccountSettingsConnections::class, 'index'])->name('pages-account-settings-connections');
Route::get('/pages/faq', [Faq::class, 'index'])->name('pages-faq');
Route::get('/pages/pricing', [PagesPricing::class, 'index'])->name('pages-pricing');
Route::get('/pages/misc-error', [MiscError::class, 'index'])->name('pages-misc-error');
Route::get('/pages/misc-under-maintenance', [MiscUnderMaintenance::class, 'index'])->name('pages-misc-under-maintenance');
Route::get('/pages/misc-comingsoon', [MiscComingSoon::class, 'index'])->name('pages-misc-comingsoon');
Route::get('/pages/misc-not-authorized', [MiscNotAuthorized::class, 'index'])->name('pages-misc-not-authorized');

// authentication
Route::get('/auth/login-basic', [LoginBasic::class, 'index'])->name('auth-login-basic');
Route::get('/auth/login-cover', [LoginCover::class, 'index'])->name('auth-login-cover');
Route::get('/auth/register-basic', [RegisterBasic::class, 'index'])->name('auth-register-basic');
Route::get('/auth/register-cover', [RegisterCover::class, 'index'])->name('auth-register-cover');
Route::get('/auth/register-multisteps', [RegisterMultiSteps::class, 'index'])->name('auth-register-multisteps');
Route::get('/auth/verify-email-basic', [VerifyEmailBasic::class, 'index'])->name('auth-verify-email-basic');
Route::get('/auth/verify-email-cover', [VerifyEmailCover::class, 'index'])->name('auth-verify-email-cover');
Route::get('/auth/reset-password-basic', [ResetPasswordBasic::class, 'index'])->name('auth-reset-password-basic');
Route::get('/auth/reset-password-cover', [ResetPasswordCover::class, 'index'])->name('auth-reset-password-cover');
Route::get('/auth/forgot-password-basic', [ForgotPasswordBasic::class, 'index'])->name('auth-reset-password-basic');
Route::get('/auth/forgot-password-cover', [ForgotPasswordCover::class, 'index'])->name('auth-forgot-password-cover');
Route::get('/auth/two-steps-basic', [TwoStepsBasic::class, 'index'])->name('auth-two-steps-basic');
Route::get('/auth/two-steps-cover', [TwoStepsCover::class, 'index'])->name('auth-two-steps-cover');

// wizard example
Route::get('/wizard/ex-checkout', [WizardCheckout::class, 'index'])->name('wizard-ex-checkout');
Route::get('/wizard/ex-property-listing', [PropertyListing::class, 'index'])->name('wizard-ex-property-listing');
Route::get('/wizard/ex-create-deal', [CreateDeal::class, 'index'])->name('wizard-ex-create-deal');

// modal
Route::get('/modal-examples', [ModalExample::class, 'index'])->name('modal-examples');

// cards
Route::get('/cards/basic', [CardBasic::class, 'index'])->name('cards-basic');
Route::get('/cards/advance', [CardAdvance::class, 'index'])->name('cards-advance');
Route::get('/cards/statistics', [CardStatistics::class, 'index'])->name('cards-statistics');
Route::get('/cards/analytics', [CardAnalytics::class, 'index'])->name('cards-analytics');
Route::get('/cards/gamifications', [CardGamifications::class, 'index'])->name('cards-gamifications');
Route::get('/cards/actions', [CardActions::class, 'index'])->name('cards-actions');

// User Interface
Route::get('/ui/accordion', [Accordion::class, 'index'])->name('ui-accordion');
Route::get('/ui/alerts', [Alerts::class, 'index'])->name('ui-alerts');
Route::get('/ui/badges', [Badges::class, 'index'])->name('ui-badges');
Route::get('/ui/buttons', [Buttons::class, 'index'])->name('ui-buttons');
Route::get('/ui/carousel', [Carousel::class, 'index'])->name('ui-carousel');
Route::get('/ui/collapse', [Collapse::class, 'index'])->name('ui-collapse');
Route::get('/ui/dropdowns', [Dropdowns::class, 'index'])->name('ui-dropdowns');
Route::get('/ui/footer', [Footer::class, 'index'])->name('ui-footer');
Route::get('/ui/list-groups', [ListGroups::class, 'index'])->name('ui-list-groups');
Route::get('/ui/modals', [Modals::class, 'index'])->name('ui-modals');
Route::get('/ui/navbar', [Navbar::class, 'index'])->name('ui-navbar');
Route::get('/ui/offcanvas', [Offcanvas::class, 'index'])->name('ui-offcanvas');
Route::get('/ui/pagination-breadcrumbs', [PaginationBreadcrumbs::class, 'index'])->name('ui-pagination-breadcrumbs');
Route::get('/ui/progress', [Progress::class, 'index'])->name('ui-progress');
Route::get('/ui/spinners', [Spinners::class, 'index'])->name('ui-spinners');
Route::get('/ui/tabs-pills', [TabsPills::class, 'index'])->name('ui-tabs-pills');
Route::get('/ui/toasts', [Toasts::class, 'index'])->name('ui-toasts');
Route::get('/ui/tooltips-popovers', [TooltipsPopovers::class, 'index'])->name('ui-tooltips-popovers');
Route::get('/ui/typography', [Typography::class, 'index'])->name('ui-typography');

// extended ui
Route::get('/extended/ui-avatar', [Avatar::class, 'index'])->name('extended-ui-avatar');
Route::get('/extended/ui-blockui', [BlockUI::class, 'index'])->name('extended-ui-blockui');
Route::get('/extended/ui-drag-and-drop', [DragAndDrop::class, 'index'])->name('extended-ui-drag-and-drop');
Route::get('/extended/ui-media-player', [MediaPlayer::class, 'index'])->name('extended-ui-media-player');
Route::get('/extended/ui-perfect-scrollbar', [PerfectScrollbar::class, 'index'])->name('extended-ui-perfect-scrollbar');
Route::get('/extended/ui-star-ratings', [StarRatings::class, 'index'])->name('extended-ui-star-ratings');
Route::get('/extended/ui-sweetalert2', [SweetAlert::class, 'index'])->name('extended-ui-sweetalert2');
Route::get('/extended/ui-text-divider', [TextDivider::class, 'index'])->name('extended-ui-text-divider');
Route::get('/extended/ui-timeline-basic', [TimelineBasic::class, 'index'])->name('extended-ui-timeline-basic');
Route::get('/extended/ui-timeline-fullscreen', [TimelineFullscreen::class, 'index'])->name('extended-ui-timeline-fullscreen');
Route::get('/extended/ui-tour', [Tour::class, 'index'])->name('extended-ui-tour');
Route::get('/extended/ui-treeview', [Treeview::class, 'index'])->name('extended-ui-treeview');
Route::get('/extended/ui-misc', [Misc::class, 'index'])->name('extended-ui-misc');

// icons
Route::get('/icons/tabler', [Tabler::class, 'index'])->name('icons-tabler');
Route::get('/icons/font-awesome', [FontAwesome::class, 'index'])->name('icons-font-awesome');

// form elements
Route::get('/forms/basic-inputs', [BasicInput::class, 'index'])->name('forms-basic-inputs');
Route::get('/forms/input-groups', [InputGroups::class, 'index'])->name('forms-input-groups');
Route::get('/forms/custom-options', [CustomOptions::class, 'index'])->name('forms-custom-options');
Route::get('/forms/editors', [Editors::class, 'index'])->name('forms-editors');
Route::get('/forms/file-upload', [FileUpload::class, 'index'])->name('forms-file-upload');
Route::get('/forms/pickers', [Picker::class, 'index'])->name('forms-pickers');
Route::get('/forms/selects', [Selects::class, 'index'])->name('forms-selects');
Route::get('/forms/sliders', [Sliders::class, 'index'])->name('forms-sliders');
Route::get('/forms/switches', [Switches::class, 'index'])->name('forms-switches');
Route::get('/forms/extras', [Extras::class, 'index'])->name('forms-extras');

// form layouts
Route::get('/form/layouts-vertical', [VerticalForm::class, 'index'])->name('form-layouts-vertical');
Route::get('/form/layouts-horizontal', [HorizontalForm::class, 'index'])->name('form-layouts-horizontal');
Route::get('/form/layouts-sticky', [StickyActions::class, 'index'])->name('form-layouts-sticky');

// form wizards
Route::get('/form/wizard-numbered', [FormWizardNumbered::class, 'index'])->name('form-wizard-numbered');
Route::get('/form/wizard-icons', [FormWizardIcons::class, 'index'])->name('form-wizard-icons');
Route::get('/form/validation', [Validation::class, 'index'])->name('form-validation');

// tables
Route::get('/tables/basic', [TablesBasic::class, 'index'])->name('tables-basic');
Route::get('/tables/datatables-basic', [DatatableBasic::class, 'index'])->name('tables-datatables-basic');
Route::get('/tables/datatables-advanced', [DatatableAdvanced::class, 'index'])->name('tables-datatables-advanced');
Route::get('/tables/datatables-extensions', [DatatableExtensions::class, 'index'])->name('tables-datatables-extensions');

// charts
Route::get('/charts/apex', [ApexCharts::class, 'index'])->name('charts-apex');
Route::get('/charts/chartjs', [ChartJs::class, 'index'])->name('charts-chartjs');

// maps
Route::get('/maps/leaflet', [Leaflet::class, 'index'])->name('maps-leaflet');

// laravel example
Route::get('/user-management', UserManagement::class)->name('laravel-example-user-management');
Route::resource('/user-list', UserManagement::class);
