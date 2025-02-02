import React from "react";
import students from "../../assets/student.png"
import country from "../../assets/conuntry.png"
import teams from "../../assets/teams.png"
import curnival from "../../assets/curnival.png"
import university from "../../assets/university.png"
import organization from "../../assets/organization.png"
import research from "../../assets/new research-and-development (1).png"
import global from "../../assets/global.png"
import lab from "../../assets/lab.png"
const Achivment = () => {
  return (
    <div>
      <section class="p-4">
        <h2 class="text-4xl sm:text-5xl md:text-4xl text-center chelsea-market-regular font-bold text-[#6b2c86] md:mb-16 mb-10 ">
          Our Achivment
        </h2>

        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a
              href="https://eliteai.tools/category/productivity"
              data-clickable="Category:20:category-card"
              class="block h-full transition-all duration-200   border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6   bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={students}/>
                </div>

                <div class="flex-grow ml-6 ">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    Students Involved
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">100000+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/business"
              data-clickable="Category:5:category-card"
              class="block h-full transition-all duration-200  border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={country}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    Countries have joined WARF
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">6+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-100 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://eliteai.tools/category/content-generation"
              data-clickable="Category:86:category-card"
              class="block h-full transition-all duration-200   border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={teams}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    Number of Involved Teams
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">470+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/developer-tools"
              data-clickable="Category:44:category-card"
              class="block h-full transition-all duration-200  border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={curnival}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    People Attended Carnival
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">4000+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/marketing"
              data-clickable="Category:17:category-card"
              class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={university}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    University Involved
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-1ray-600 text-gray-100 rounded">60+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/education"
              data-clickable="Category:11:category-card"
              class="block h-full transition-all duration-200   border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={organization}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    Organization
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">270+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/image-generator"
              data-clickable="Category:42:category-card"
              class="block h-full transition-all duration-200   border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                   <img src={research}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    Innovation and Research
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">15+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/data-analysis"
              data-clickable="Category:8:category-card"
              class="block h-full transition-all duration-200  border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6 bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D]">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded  group-hover:bg-green-100">
                  <img src={global}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    International Events
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">20+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://eliteai.tools/category/design"
              data-clickable="Category:9:category-card"
              class="block h-full transition-all duration-200   border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20"
            >
              <div class="flex items-center p-6  bg-gradient-to-r from-[#341850] via-[#3b0353] to-[#38235D] ">
                <div class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded   group-hover:bg-green-100">
                  <img src={lab}/>
                </div>

                <div class="flex-grow ml-6">
                  <h3 class="text-lg font-semibold text-gray-100 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                    Labs and Workspaces{" "}
                  </h3>

                  <div class="inline-flex items-center mt-1">
                    <span class="text-gray-100 rounded">10+</span>
                  </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          
        </ul>
      </section>
    </div>
  );
};

export default Achivment;
