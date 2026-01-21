"use client"

import { useState } from "react"
import { FadeIn } from "@/components/motions"

const mockData = [
  { id: 1, name: "Project Alpha", status: "Active", value: 12500 },
  { id: 2, name: "Project Beta", status: "Completed", value: 8300 },
  { id: 3, name: "Project Gamma", status: "Pending", value: 4200 },
  { id: 4, name: "Project Delta", status: "Active", value: 15800 },
  { id: 5, name: "Project Epsilon", status: "Completed", value: 9100 },
]

const statusStyles: Record<string, string> = {
  Active: "bg-green-500/20 text-green-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Completed: "bg-blue-500/20 text-blue-400",
}

const barColors: Record<string, string> = {
  Active: "bg-green-500",
  Pending: "bg-yellow-500",
  Completed: "bg-blue-500",
}

const filterOptions = ["All", "Active", "Pending", "Completed"] as const
type StatusFilter = typeof filterOptions[number]

export function DemoDashboard() {
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("All")

  const filteredData = selectedStatus === "All"
    ? mockData
    : mockData.filter((item) => item.status === selectedStatus)

  const maxValue = filteredData.length > 0
    ? Math.max(...filteredData.map((item) => item.value))
    : 0

  return (
    <FadeIn>
      <div className="rounded-lg border border-border/50 bg-card p-6">
        <h3 className="text-xl font-semibold">Demo Dashboard</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Sample data visualization
        </p>

        {/* Filter buttons */}
        <div className="mt-6 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedStatus(option)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedStatus === option
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mt-4 text-sm text-muted-foreground">
          Showing {filteredData.length} of {mockData.length} items
        </p>

        {filteredData.length === 0 ? (
          /* Empty state */
          <div className="mt-6 rounded-lg border border-dashed border-border/50 py-12 text-center">
            <p className="text-muted-foreground">No items match this filter.</p>
          </div>
        ) : (
          <>
            {/* Bar Chart */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-muted-foreground">Value Overview</h4>
              <div className="mt-3 space-y-3">
                {filteredData.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-28 truncate text-sm">{item.name}</div>
                    <div className="flex-1">
                      <div
                        className={`h-6 rounded ${barColors[item.status]} transition-all duration-300`}
                        style={{ width: `${(item.value / maxValue) * 100}%` }}
                      />
                    </div>
                    <div className="w-20 text-right font-mono text-sm">
                      ${item.value.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="mt-6 overflow-x-auto">
              <h4 className="mb-3 text-sm font-medium text-muted-foreground">Details</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="pb-3 text-left font-medium text-muted-foreground">ID</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Name</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="pb-3 text-right font-medium text-muted-foreground">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id} className="border-b border-border/30 last:border-0">
                      <td className="py-3 text-muted-foreground">{item.id}</td>
                      <td className="py-3 font-medium">{item.name}</td>
                      <td className="py-3">
                        <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${statusStyles[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 text-right font-mono">
                        ${item.value.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </FadeIn>
  )
}