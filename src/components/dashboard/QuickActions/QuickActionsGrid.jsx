// // // import AddClient from "./AddClient";
// // // import ScheduleConsultation from "./ScheduleConsultation";
// // // import CreateMealPlan from "./CreateMealPlan";
// // // import ViewReports from "./ViewReports";

// // // export default function QuickActionsGrid() {
// // //   return (
// // //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
// // //       <AddClient />
// // //       <ScheduleConsultation />
// // //       <CreateMealPlan />
// // //       <ViewReports />
// // //     </div>
// // //   );
// // // }






// // // import AddClient from "./AddClient";
// // // import ScheduleConsultation from "./ScheduleConsultation";
// // // import CreateMealPlan from "./CreateMealPlan";
// // // import ViewReports from "./ViewReports";

// // // export default function QuickActionsGrid() {
// // //   return (
// // //     <div className="w-full px-4 sm:px-6 lg:px-8">
// // // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
// // //         <ActionCard>
// // //           <AddClient />
// // //         </ActionCard>
// // //         <ActionCard>
// // //           <ScheduleConsultation />
// // //         </ActionCard>
// // //         <ActionCard>
// // //           <CreateMealPlan />
// // //         </ActionCard>
// // //         <ActionCard>
// // //           <ViewReports />
// // //         </ActionCard>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function ActionCard({ children }) {
// // //   return (
// // //  <div className="">
// // //   {children}
// // // </div>

// // //   );
// // // }




// // // import AddClient from "./AddClient";
// // // import ScheduleConsultation from "./ScheduleConsultation";
// // // import CreateMealPlan from "./CreateMealPlan";
// // // import ViewReports from "./ViewReports";

// // // export default function QuickActionsGrid() {
// // //   return (
// // //     <div className="w-full px-4 sm:px-6 lg:px-8">
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
// // //         <ActionCard>
// // //           <AddClient />
// // //         </ActionCard>
// // //         <ActionCard>
// // //           <ScheduleConsultation />
// // //         </ActionCard>
// // //         <ActionCard>
// // //           <CreateMealPlan />
// // //         </ActionCard>
// // //         <ActionCard>
// // //           <ViewReports />
// // //         </ActionCard>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function ActionCard({ children }) {
// // //   return (
// // //     <div className="bg-white rounded-xl p-2">
// // //       <div className="rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-[inset_0_0_0_2px_#22c55e]">
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import AddClient from "./AddClient";
// // import ScheduleConsultation from "./ScheduleConsultation";
// // import CreateMealPlan from "./CreateMealPlan";
// // import ViewReports from "./ViewReports";

// // export default function QuickActionsGrid() {
// //   return (
// //     <div className="w-full px-4 sm:px-6 lg:px-8">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
// //         <ActionCard>
// //           <AddClient />
// //         </ActionCard>
// //         <ActionCard>
// //           <ScheduleConsultation />
// //         </ActionCard>
// //         <ActionCard>
// //           <CreateMealPlan />
// //         </ActionCard>
// //         <ActionCard>
// //           <ViewReports />
// //         </ActionCard>
// //       </div>
// //     </div>
// //   );
// // }

// // function ActionCard({ children }) {
// //   return (
// //     <div className="bg-white rounded-xl p-2">
// //       <div className="rounded-lg p-6 transition-all duration-300 cursor-pointer relative group">
// //         {/* Inner highlight effect */}
// //         <div className="absolute inset-0 rounded-lg z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 border-2 border-green-500 pointer-events-none" />
// //         <div className="relative z-10">{children}</div>
// //       </div>
// //     </div>
// //   );
// // }




// import AddClient from "./AddClient";
// import ScheduleConsultation from "./ScheduleConsultation";
// import CreateMealPlan from "./CreateMealPlan";
// import ViewReports from "./ViewReports";

// export default function QuickActionsGrid() {
//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
//         <ActionCard gradient="from-green-400 via-emerald-300 to-green-500">
//           <AddClient />
//         </ActionCard>
//         <ActionCard gradient="from-blue-400 via-sky-300 to-blue-500">
//           <ScheduleConsultation />
//         </ActionCard>
//         <ActionCard gradient="from-pink-400 via-rose-300 to-pink-500">
//           <CreateMealPlan />
//         </ActionCard>
//         <ActionCard gradient="from-purple-400 via-violet-300 to-purple-500">
//           <ViewReports />
//         </ActionCard>
//       </div>
//     </div>
//   );
// }

// function ActionCard({ children, gradient }) {
//   return (
//     <div
//       className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
//     >
//       {/* Gradient background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
//       />
//       {/* Glass inner panel */}
//       <div className="relative z-10 bg-white/60 backdrop-blur-md p-6 h-full flex items-center justify-center text-center rounded-2xl border border-white/30 group-hover:scale-105 transition-transform duration-300">
//         {children}
//       </div>
//     </div>
//   );
// }



import AddClient from "./AddClient";
import ScheduleConsultation from "./ScheduleConsultation";
import CreateMealPlan from "./CreateMealPlan";
import ViewReports from "./ViewReports";

export default function QuickActionsGrid() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <ActionCard gradient="from-green-400 via-emerald-300 to-green-500">
          <AddClient />
        </ActionCard>
        <ActionCard gradient="from-blue-400 via-sky-300 to-blue-500">
          <ScheduleConsultation />
        </ActionCard>
        <ActionCard gradient="from-pink-400 via-rose-300 to-pink-500">
          <CreateMealPlan />
        </ActionCard>
        <ActionCard gradient="from-purple-400 via-violet-300 to-purple-500">
          <ViewReports />
        </ActionCard>
      </div>
    </div>
  );
}

function ActionCard({ children, gradient }) {
  return (
    <div
      className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 
                   bg-white blur-2xl transition-all duration-500"
      />

      {/* Glass inner panel */}
      <div
        className="relative z-10 bg-white/60 backdrop-blur-md p-5 sm:p-6 h-full flex items-center 
                   justify-center text-center rounded-2xl border border-white/30 
                   group-hover:scale-105 transition-transform duration-300"
      >
        {children}
      </div>
    </div>
  );
}
