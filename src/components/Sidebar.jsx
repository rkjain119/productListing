import React from 'react'
import { filters } from '../../data/filters'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function Sidebar({
  selectedFilters,
  handleFilterChange,
  handleSortChange,
  handleResetFilters,
}) {
  return (
    <aside>
      <div className="max-w-lg lg:block">
        <form className="space-y-10 divide-y divide-gray-200 ">
          <div className="flex items-end justify-between">
            <div>
              <label
                htmlFor="SortBy"
                className="block text-sm font-medium text-gray-900 "
              >
                Sort By
              </label>
              <select
                id="SortBy"
                className="mt-1 text-sm border-gray-300 rounded"
                onChange={(e) => handleSortChange(e)}
              >
                <option>Sort By</option>
                <option value="h-l">High to low</option>
                <option value="l-h">Low to High</option>
              </select>
            </div>
            <div className="">
              <button
                type="button"
                className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-gray-600  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleResetFilters()}
              >
                <TrashIcon className=" h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {filters.map((section, sectionIdx) => (
            <div
              key={section.id}
              className="pt-10"
              //  className={sectionIdx === 0 ? null : 'pt-10'}
            >
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">
                  {section.name}
                </legend>
                <div className="pt-6 space-y-3">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`${section.id}-${optionIdx}`}
                        name={`${section.id}`}
                        value={option.value}
                        checked={selectedFilters[section.id].includes(
                          option.value
                        )}
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        onChange={(e) => handleFilterChange(e)}
                      />
                      {/* {option.value} */}
                      <label
                        htmlFor={`${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
        </form>
      </div>
    </aside>
  )
}
