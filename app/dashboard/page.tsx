'use client';

export default function DashboardPage() {
  return (
    <div className="p-8 flex-1 overflow-auto">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Units</div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">120</span>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+2 This Month</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Occupancy Rate</div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">92.5%</span>
            <div className="w-16 bg-gray-100 h-1.5 rounded-full overflow-hidden">
               <div className="bg-blue-600 h-full w-[92%]"></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Monthly Revenue</div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">NPR 4.2M</span>
            <span className="text-xs text-blue-600">Budget: 4.5M</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Open Tickets</div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">08</span>
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-medium">3 Critical</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Table Area */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-50 flex justify-between items-center">
             <h3 className="font-bold">Recent Occupancy</h3>
             <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                <th className="px-6 py-3">Resident</th>
                <th className="px-6 py-3">Unit</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Payment</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 flex items-center gap-3 font-medium">Aayush Shrestha</td>
                <td className="px-6 py-4 text-gray-500">101-A (Block 1)</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">Active</span></td>
                <td className="px-6 py-4 text-emerald-600 font-semibold">Paid</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Bina Thapa</td>
                <td className="px-6 py-4 text-gray-500">202-B (Block 2)</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">Active</span></td>
                <td className="px-6 py-4 text-red-600 font-semibold">Overdue</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Rohan Jha</td>
                <td className="px-6 py-4 text-gray-500">105-C (Block 3)</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Pending Renewal</span></td>
                <td className="px-6 py-4 text-emerald-600 font-semibold">Paid</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Laxmi Devi</td>
                <td className="px-6 py-4 text-gray-500">304-A (Block 1)</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Vacant</span></td>
                <td className="px-6 py-4 text-gray-400">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Activity / Alerts Area */}
        <div className="flex flex-col gap-6">
          {/* Revenue Chart Mockup */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-4">Revenue Trend</h3>
            <div className="flex items-end gap-2 h-24">
              <div className="flex-1 bg-blue-100 h-1/2 rounded-t"></div>
              <div className="flex-1 bg-blue-100 h-2/3 rounded-t"></div>
              <div className="flex-1 bg-blue-200 h-3/4 rounded-t"></div>
              <div className="flex-1 bg-blue-600 h-full rounded-t"></div>
              <div className="flex-1 bg-blue-200 h-4/5 rounded-t"></div>
              <div className="flex-1 bg-blue-100 h-3/5 rounded-t"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-2">
               <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            </div>
          </div>

          {/* Maintenance Feed */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex-1">
            <h3 className="font-bold mb-4">Live Activities</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                <div>
                  <div className="text-xs font-semibold">Plumber Assigned</div>
                  <div className="text-[10px] text-gray-500">Unit 402 • 10 mins ago</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                <div>
                  <div className="text-xs font-semibold">Security Guard Shift Change</div>
                  <div className="text-[10px] text-gray-500">Main Gate • 45 mins ago</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                <div>
                  <div className="text-xs font-semibold">Emergency Notice Sent</div>
                  <div className="text-[10px] text-gray-500">Lift Maintenance Block 2 • 2h ago</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                <div>
                  <div className="text-xs font-semibold">Visitor Log Entry</div>
                  <div className="text-[10px] text-gray-500">Guest to 101A • 3h ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
