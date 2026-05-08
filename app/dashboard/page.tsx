'use client';

import { Activity, AlertOctagon, BarChart3, Building, ChevronRight, CircleDot, FileText, Settings, Users } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="p-8 flex-1 overflow-auto bg-gray-50/30">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Welcome back. Here is what is happening in the property today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Building className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Units</div>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-900">120</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+2 Units</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Occupancy</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">92.5%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
               <div className="bg-indigo-600 h-full w-[92%] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Monthly Revenue</div>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-900">Rs. 4.2M</span>
            <span className="text-xs font-medium text-gray-500">Target: 4.5M</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Open Tickets</div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">08</span>
              <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-md font-semibold border border-red-100">3 Critical</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Table Area */}
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
             <h3 className="font-bold text-gray-900 text-lg">Recent Occupancy</h3>
             <button className="text-sm flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
               View All <ChevronRight className="w-4 h-4 ml-1" />
             </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-y border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Resident</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Unit</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Payment</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-50">
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">AS</div>
                      <span className="font-semibold text-gray-900">Aayush Shrestha</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">101-A (Block 1)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md border border-emerald-100"><CircleDot className="w-3 h-3" /> Active</span></td>
                  <td className="px-6 py-4"><span className="text-emerald-600 font-semibold">Paid</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">BT</div>
                      <span className="font-semibold text-gray-900">Bina Thapa</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">202-B (Block 2)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md border border-emerald-100"><CircleDot className="w-3 h-3" /> Active</span></td>
                  <td className="px-6 py-4"><span className="text-red-600 font-semibold">Overdue</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">RJ</div>
                      <span className="font-semibold text-gray-900">Rohan Jha</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">105-C (Block 3)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100"><CircleDot className="w-3 h-3" /> Pending</span></td>
                  <td className="px-6 py-4"><span className="text-emerald-600 font-semibold">Paid</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-xs">LD</div>
                      <span className="font-semibold text-gray-900">Laxmi Devi</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">304-A (Block 1)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md border border-gray-200"><CircleDot className="w-3 h-3" /> Vacant</span></td>
                  <td className="px-6 py-4"><span className="text-gray-400 font-medium">—</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity / Alerts Area */}
        <div className="flex flex-col gap-6">
          {/* Revenue Chart Mockup */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group overflow-hidden">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Revenue Trend</h3>
            <div className="flex items-end gap-3 h-32">
              <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-colors h-1/2 rounded-t-lg relative group-hover:opacity-50 hover:!opacity-100"></div>
              <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-colors h-2/3 rounded-t-lg relative group-hover:opacity-50 hover:!opacity-100"></div>
              <div className="flex-1 bg-blue-100 hover:bg-blue-200 transition-colors h-3/4 rounded-t-lg relative group-hover:opacity-50 hover:!opacity-100"></div>
              <div className="flex-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] h-full rounded-t-lg relative group-hover:opacity-50 hover:!opacity-100"></div>
              <div className="flex-1 bg-blue-100 hover:bg-blue-200 transition-colors h-4/5 rounded-t-lg relative group-hover:opacity-50 hover:!opacity-100"></div>
              <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-colors h-3/5 rounded-t-lg relative group-hover:opacity-50 hover:!opacity-100"></div>
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-gray-400 mt-3 px-1">
               <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            </div>
          </div>

          {/* Maintenance Feed */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900 text-lg">Live Activities</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 relative">
                <div className="absolute top-8 left-2 bottom-[-16px] w-[2px] bg-gray-100"></div>
                <div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-white flex-shrink-0 mt-1 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Plumber Assigned</div>
                  <div className="text-xs text-gray-500 mt-0.5">Unit 402 • 10 mins ago</div>
                </div>
              </div>
              
              <div className="flex gap-4 relative">
                <div className="absolute top-8 left-2 bottom-[-16px] w-[2px] bg-gray-100"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-100 border-2 border-white flex-shrink-0 mt-1 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Security Guard Shift Change</div>
                  <div className="text-xs text-gray-500 mt-0.5">Main Gate • 45 mins ago</div>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="absolute top-8 left-2 bottom-[-16px] w-[2px] bg-gray-100"></div>
                <div className="w-4 h-4 rounded-full bg-red-100 border-2 border-white flex-shrink-0 mt-1 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Emergency Notice Sent</div>
                  <div className="text-xs text-gray-500 mt-0.5">Lift Maintenance Block 2 • 2h ago</div>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-gray-200 border-2 border-white flex-shrink-0 mt-1 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Visitor Log Entry</div>
                  <div className="text-xs text-gray-500 mt-0.5">Guest to 101A • 3h ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
