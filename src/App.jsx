// import { Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Sidebar from './components/Sidebar';
// import MealPlans from './pages/MealPlans';
// import NutritionInfo from './pages/NutritionInfo';
// import ClientManagement from './pages/ClientManager';
// // import PricingPlans from './pages/Pricing';
// import PricingPage from './components/PricingPage/PricingPage';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';
// import TotalClients from './components/dashboard/TotalClients';
// import ClientsPage from './components/dashboard/TotalClients/Clients';
// import ActivePlansPage from './components/dashboard/ActivePlans/AvtiveClients';
// import RevenuePage from './components/dashboard/RevenuePlans/revenueClients';
// import AvgProgressPage from './components/dashboard/AvgProgress/AvgProgressClients';
// import AddClient from './components/dashboard/QuickActions/QuickActionsNewPage/AddClient';
// import ScheduleConsultation from './components/dashboard/QuickActions/QuickActionsNewPage/ScheduleConsultationPage';
// import CreateMealPlanPage from './components/dashboard/QuickActions/QuickActionsNewPage/CreateMealPlane';
// import ViewReports from './components/dashboard/QuickActions/QuickActionsNewPage/ViewReports';
// import Diabetes from './components/dashboard/HealthCondition/HealthConditionNewPage/Diabetes';
// import Hypertension from './components/dashboard/HealthCondition/HealthConditionNewPage/HyperTension';
// import Pcos from './components/dashboard/HealthCondition/HealthConditionNewPage/Pcos';
// import Heart from './components/dashboard/HealthCondition/HealthConditionNewPage/HeartDisesas';
// import GeneralWellness from './components/dashboard/HealthCondition/HealthConditionNewPage/GenralWellness';
// import CaloriesPage from './components/DailyPlan/CardNewPages/CaloriesPage';
// import ProteinPage from './components/DailyPlan/CardNewPages/ProteinPage';
// import CarbsPage from './components/DailyPlan/CardNewPages/CarbsPage';
// import FatPage from './components/DailyPlan/CardNewPages/FatsPage';
// import ShoppingListPage from './components/DailyPlan/ShopingList.jsx/ShoppingListPage';
// import AddMealPlan from './components/DailyPlan/AddMeal/AddMealPlan';
// import ActiveClients from './components/ClientManagement/ActiveClients';
// import ActivePlans from './components/ClientManagement/ActivePlans';
// import AvgProgress from './components/ClientManagement/AvgProgress';
// import './App.css';
// import ThisMonthPage from './components/ClientManagement/ThisMonth';



// // import PaymentForm from './components/PricingPage/PaymentForm';
// import QrPaymentScanner from './components/PricingPage/QrPaymentScanner';   
// import PlanDetailsPage from './components/PricingPage/PlanDetailsPage'; 
// import PaymentSuccess from './components/PricingPage/PaymentSuccessPage'; // New component for payment success  
// import RegistrationForm from './components/PricingPage/RegistrationForm';
// import RegistrationList from './components/PricingPage/RegistrationList';


// import AuthGate from './components/Auth/AuthGate';


// function App() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-4">
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/meal-plans" element={<MealPlans />} />
//           <Route path="/nutrition-info" element={<NutritionInfo />} />
//           <Route path="/client-management" element={<ClientManagement />} />
//           {/* <Route path="/pricing-plans" element={<PricingPlans />} /> */}
//           <Route path="/pricing-plans" element={<PricingPage />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//             <Route path="/about-us" element={<AboutUs />} />

//           <Route path="/dashboard" element={<TotalClients value={120} change="+10 this week" />} />
//         <Route path="/clients" element={<ClientsPage />} />
//           <Route path="/active-plans" element={<ActivePlansPage />} />
//                 <Route path="/revenue" element={<RevenuePage />} /> {/* ✅ New Route */}
//                 <Route path="/avg-progress" element={<AvgProgressPage />} />



//         <Route path="/add-client" element={<AddClient />} />
//         <Route path="/schedule-consultation" element={<ScheduleConsultation/>} />
//       <Route path="/create-meal-plan" element={<CreateMealPlanPage />} />
//         <Route path="/view-reports" element={<ViewReports />} />


//         <Route path="/clients/diabetes" element={<Diabetes />} />
//           <Route path="/clients/hypertension" element={<Hypertension/>} />
//           <Route path="/clients/pcos" element={<Pcos />} />
//           <Route path="/clients/heart" element={<Heart/>} />
//           <Route path="/clients/wellness" element={<GeneralWellness />} />



//         <Route path="/daily-plan/calories" element={<CaloriesPage />} />
//         <Route path="/daily-plan/protein" element={<ProteinPage />} />
//         <Route path ="/daily-plan/carbs" element={<CarbsPage />} />
//         <Route path="/daily-plan/fat" element={<FatPage />} />


//         <Route path="/daily-plan/shopping-list" element={<ShoppingListPage />} />

//         <Route path="/daily-plan/add-meal" element={<AddMealPlan />} />



//         <Route path="/active-clients" element={<ActiveClients />} />
//         <Route path="/plans/active" element={<ActivePlans />} />
//         <Route path="/progress" element={<AvgProgress />} />
//         <Route path="/reports/monthly" element={< ThisMonthPage/>} /> {/* Placeholder for Monthly Reports */}
//         {/* Add other routes as needed */}



//          <Route path="/plan/:planName" element={<PlanDetailsPage />} />
//         <Route path="/payment-form/:planName" element={<RegistrationForm />} />
//         <Route path="/qr-scanner/:planName" element={<QrPaymentScanner />} />
//         <Route path="/success" element={<PaymentSuccess />} />
//           {/* <Route path="/registration" element={<RegistrationForm />} /> */}
//           <Route path="/registrations" element={<RegistrationList />} />

//         {/* Authenticated routes */}
//         <Route path="/" element={<AuthGate />} />


//            </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;







import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MealPlans from "./pages/MealPlans";
import NutritionInfo from "./pages/NutritionInfo";
import ClientManagement from "./pages/ClientManager";
import PricingPage from "./components/PricingPage/PricingPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import TotalClients from "./components/dashboard/TotalClients";
import ClientsPage from "./components/dashboard/TotalClients/Clients";
import ActivePlansPage from "./components/dashboard/ActivePlans/AvtiveClients";
import RevenuePage from "./components/dashboard/RevenuePlans/revenueClients";
import AvgProgressPage from "./components/dashboard/AvgProgress/AvgProgressClients";
import AddClient from "./components/dashboard/QuickActions/QuickActionsNewPage/AddClient";
import ScheduleConsultation from "./components/dashboard/QuickActions/QuickActionsNewPage/ScheduleConsultationPage";
import CreateMealPlanPage from "./components/dashboard/QuickActions/QuickActionsNewPage/CreateMealPlane";
import ViewReports from "./components/dashboard/QuickActions/QuickActionsNewPage/ViewReports";
import Diabetes from "./components/dashboard/HealthCondition/HealthConditionNewPage/Diabetes";
import Hypertension from "./components/dashboard/HealthCondition/HealthConditionNewPage/HyperTension";
import Pcos from "./components/dashboard/HealthCondition/HealthConditionNewPage/Pcos";
import Heart from "./components/dashboard/HealthCondition/HealthConditionNewPage/HeartDisesas";
import GeneralWellness from "./components/dashboard/HealthCondition/HealthConditionNewPage/GenralWellness";
import CaloriesPage from "./components/DailyPlan/CardNewPages/CaloriesPage";
import ProteinPage from "./components/DailyPlan/CardNewPages/ProteinPage";
import CarbsPage from "./components/DailyPlan/CardNewPages/CarbsPage";
import FatPage from "./components/DailyPlan/CardNewPages/FatsPage";
import ShoppingListPage from "./components/DailyPlan/ShopingList.jsx/ShoppingListPage";
import AddMealPlan from "./components/DailyPlan/AddMeal/AddMealPlan";
import ActiveClients from "./components/ClientManagement/ActiveClients";
import ActivePlans from "./components/ClientManagement/ActivePlans";
import AvgProgress from "./components/ClientManagement/AvgProgress";
import ThisMonthPage from "./components/ClientManagement/ThisMonth";
import QrPaymentScanner from "./components/PricingPage/QrPaymentScanner";   
import PlanDetailsPage from "./components/PricingPage/PlanDetailsPage"; 
import PaymentSuccess from "./components/PricingPage/PaymentSuccessPage";  
import RegistrationForm from "./components/PricingPage/RegistrationForm";
import RegistrationList from "./components/PricingPage/RegistrationList";
import AuthGate from "./components/Auth/AuthGate";

// Auth pages (must be public)
// import SignIn from "./components/Auth/SignIn";
// import SignUp from "./components/Auth/SignUp";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          {/* Public Routes */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/" element={<AuthGate />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meal-plans"
            element={
              <ProtectedRoute>
                <MealPlans />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nutrition-info"
            element={
              <ProtectedRoute>
                <NutritionInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client-management"
            element={
              <ProtectedRoute>
                <ClientManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pricing-plans"
            element={
              <ProtectedRoute>
                <PricingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients"
            element={
              <ProtectedRoute>
                <ClientsPage />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/active-plans"
            element={
              <ProtectedRoute>
                <ActivePlansPage />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/revenue"
            element={
              <ProtectedRoute>
                <RevenuePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/avg-progress"
            element={
              <ProtectedRoute>
                <AvgProgressPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-client"
            element={
              <ProtectedRoute>
                <AddClient />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule-consultation"
            element={
              <ProtectedRoute>
                <ScheduleConsultation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-meal-plan"
            element={
              <ProtectedRoute>
                <CreateMealPlanPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-reports"
            element={
              <ProtectedRoute>
                <ViewReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients/diabetes"
            element={
              <ProtectedRoute>
                <Diabetes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients/hypertension"
            element={
              <ProtectedRoute>
                <Hypertension />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients/pcos"
            element={
              <ProtectedRoute>
                <Pcos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients/heart"
            element={
              <ProtectedRoute>
                <Heart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients/wellness"
            element={
              <ProtectedRoute>
                <GeneralWellness />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-plan/calories"
            element={
              <ProtectedRoute>
                <CaloriesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-plan/protein"
            element={
              <ProtectedRoute>
                <ProteinPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-plan/carbs"
            element={
              <ProtectedRoute>
                <CarbsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-plan/fat"
            element={
              <ProtectedRoute>
                <FatPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-plan/shopping-list"
            element={
              <ProtectedRoute>
                <ShoppingListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-plan/add-meal"
            element={
              <ProtectedRoute>
                <AddMealPlan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/active-clients"
            element={
              <ProtectedRoute>
                <ActiveClients />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plans/active"
            element={
              <ProtectedRoute>
                <ActivePlans />
              </ProtectedRoute>
            }
          />
          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <AvgProgress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports/monthly"
            element={
              <ProtectedRoute>
                <ThisMonthPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plan/:planName"
            element={
              <ProtectedRoute>
                <PlanDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-form/:planName"
            element={
              <ProtectedRoute>
                <RegistrationForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/qr-scanner/:planName"
            element={
              <ProtectedRoute>
                <QrPaymentScanner />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrations"
            element={
              <ProtectedRoute>
                <RegistrationList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthGate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
