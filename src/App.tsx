import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { UserRoleProvider } from './contexts/UserRoleContext';
import { OrderProvider } from './contexts/OrderContext';
import { DriverAuthProvider } from './contexts/DriverAuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DriverProtectedRoute from './components/auth/DriverProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Pages principales
const Index = lazy(() => import("./pages/Index"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const PartnerRegistrationPage = lazy(() => import("./pages/PartnerRegistrationPage"));
const DriverLoginPage = lazy(() => import("./pages/DriverLoginPage"));
const DriverRegisterPage = lazy(() => import("./pages/DriverRegisterPage"));
const DriverRegistrationPage = lazy(() => import("./pages/DriverRegistrationPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Pages de navigation
const RestaurantsPage = lazy(() => import("./pages/RestaurantsPage"));
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const RestaurantPageOptimized = lazy(() => import("./pages/RestaurantPageOptimized"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const AllItemsPage = lazy(() => import("./pages/AllItemsPage"));
const Categories = lazy(() => import("./pages/Categories"));
const CategoryDetail = lazy(() => import("./pages/CategoryDetail"));

// Pages de panier et commande
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const OrderConfirmationPage = lazy(() => import("./pages/OrderConfirmationPage"));
const OrderTrackingPage = lazy(() => import("./pages/OrderTrackingPage"));
const OrdersHistoryPage = lazy(() => import("./pages/OrdersHistoryPage"));
const PaymentStatusPage = lazy(() => import("./pages/PaymentStatusPage"));

// Pages de réservation
const ReservationPage = lazy(() => import("./pages/ReservationPage"));

// Pages de paiement et abonnement
const SubscriptionPaymentStatusPage = lazy(() => import("./pages/SubscriptionPaymentStatusPage"));

// Pages de dashboard
const AdminContent = lazy(() => import("./pages/dashboard/AdminContent"));
const AdminAnalytics = lazy(() => import("./pages/dashboard/AdminAnalytics"));
const AdminBusinesses = lazy(() => import("./pages/dashboard/AdminBusinesses"));
const AdminRequests = lazy(() => import("./pages/dashboard/AdminRequests"));
const AdminDrivers = lazy(() => import("./pages/dashboard/AdminDrivers"));
const AdminOrders = lazy(() => import("./pages/dashboard/AdminOrders"));
const AdminUsers = lazy(() => import("./pages/dashboard/AdminUsers"));

const PartnerDashboard = lazy(() => import("./pages/dashboard/PartnerDashboard"));
const PartnerOrders = lazy(() => import("./pages/dashboard/PartnerOrders"));
const PartnerMenu = lazy(() => import("./pages/dashboard/PartnerMenu"));
const PartnerReservations = lazy(() => import("./pages/dashboard/PartnerReservations"));
const PartnerProfile = lazy(() => import("./pages/dashboard/PartnerProfile"));
const PartnerBilling = lazy(() => import("./pages/dashboard/PartnerBilling"));
const PartnerSettings = lazy(() => import("./pages/dashboard/PartnerSettings"));

const CustomerDashboard = lazy(() => import("./pages/dashboard/CustomerDashboard"));
const UserOrders = lazy(() => import("./pages/dashboard/UserOrders"));
const UserProfile = lazy(() => import("./pages/dashboard/UserProfile"));
const UserFavorites = lazy(() => import("./pages/dashboard/UserFavorites"));

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserRoleProvider>
          <CartProvider>
            <OrderProvider>
              <DriverAuthProvider>
                <ScrollToTop />
                <div className="min-h-screen bg-background">
                  <Routes>
                    {/* Routes publiques */}
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/partner-registration" element={<PartnerRegistrationPage />} />
                    <Route path="/driver-login" element={<DriverLoginPage />} />
                    <Route path="/driver-register" element={<DriverRegisterPage />} />
                    <Route path="/driver-registration" element={<DriverRegistrationPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    {/* Routes de navigation */}
                    <Route path="/restaurants" element={<RestaurantsPage />} />
                    <Route path="/restaurant/:id" element={<RestaurantPage />} />
                    <Route path="/restaurant-optimized/:id" element={<RestaurantPageOptimized />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/items" element={<AllItemsPage />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/category/:id" element={<CategoryDetail />} />
                    
                    {/* Routes de panier et commande */}
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                    <Route path="/order-tracking/:orderId" element={<OrderTrackingPage />} />
                    <Route path="/orders-history" element={<OrdersHistoryPage />} />
                    <Route path="/payment-status" element={<PaymentStatusPage />} />
                    
                    {/* Routes de réservation */}
                    <Route path="/reservation" element={<ReservationPage />} />
                    
                    {/* Routes de paiement et abonnement */}
                    <Route path="/subscription-payment-status" element={<SubscriptionPaymentStatusPage />} />
                    
                    {/* Routes de dashboard Admin */}
                    <Route path="/admin-dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminContent /></ProtectedRoute>} />
                    <Route path="/admin-dashboard/analytics" element={<ProtectedRoute allowedRoles={['admin']}><AdminAnalytics /></ProtectedRoute>} />
                    <Route path="/admin-dashboard/businesses" element={<ProtectedRoute allowedRoles={['admin']}><AdminBusinesses /></ProtectedRoute>} />
                    <Route path="/admin-dashboard/requests" element={<ProtectedRoute allowedRoles={['admin']}><AdminRequests /></ProtectedRoute>} />
                    <Route path="/admin-dashboard/drivers" element={<ProtectedRoute allowedRoles={['admin']}><AdminDrivers /></ProtectedRoute>} />
                    <Route path="/admin-dashboard/orders" element={<ProtectedRoute allowedRoles={['admin']}><AdminOrders /></ProtectedRoute>} />
                    <Route path="/admin-dashboard/users" element={<ProtectedRoute allowedRoles={['admin']}><AdminUsers /></ProtectedRoute>} />
                    
                    {/* Routes de dashboard Partenaire */}
                    <Route path="/partner-dashboard" element={<ProtectedRoute allowedRoles={['partner']}><PartnerDashboard /></ProtectedRoute>} />
                    <Route path="/partner-dashboard/orders" element={<ProtectedRoute allowedRoles={['partner']}><PartnerOrders /></ProtectedRoute>} />
                    <Route path="/partner-dashboard/menu" element={<ProtectedRoute allowedRoles={['partner']}><PartnerMenu /></ProtectedRoute>} />
                    <Route path="/partner-dashboard/reservations" element={<ProtectedRoute allowedRoles={['partner']}><PartnerReservations /></ProtectedRoute>} />
                    <Route path="/partner-dashboard/profile" element={<ProtectedRoute allowedRoles={['partner']}><PartnerProfile /></ProtectedRoute>} />
                    <Route path="/partner-dashboard/billing" element={<ProtectedRoute allowedRoles={['partner']}><PartnerBilling /></ProtectedRoute>} />
                    <Route path="/partner-dashboard/settings" element={<ProtectedRoute allowedRoles={['partner']}><PartnerSettings /></ProtectedRoute>} />
                    
                    {/* Routes de dashboard Client */}
                    <Route path="/customer-dashboard" element={<ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>} />
                    <Route path="/customer-dashboard/orders" element={<ProtectedRoute allowedRoles={['customer']}><UserOrders /></ProtectedRoute>} />
                    <Route path="/customer-dashboard/profile" element={<ProtectedRoute allowedRoles={['customer']}><UserProfile /></ProtectedRoute>} />
                    <Route path="/customer-dashboard/favorites" element={<ProtectedRoute allowedRoles={['customer']}><UserFavorites /></ProtectedRoute>} />
                    
                    {/* Route 404 */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Toaster />
              </DriverAuthProvider>
            </OrderProvider>
          </CartProvider>
        </UserRoleProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
