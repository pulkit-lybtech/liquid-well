import { CNavItem, CTabs, CNavLink, CNav, CTabContent, CTabPane, CCard, CProgress } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs';
import React from 'react'

export default function Analytics() {

	const bar = {
		labels: ['Delhi', 'Punjab', 'Haryana', 'Canada', 'France'],
		datasets: [
		  {
			label: 'Users By Locations',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			hoverBorderColor: 'rgba(255,99,132,1)',
			data: [65, 59, 80, 81, 56],
		  },
		],
	  };
	  const options = {
		// tooltips: {
		//   enabled: false,
		//   custom: customTooltips
		// },
		maintainAspectRatio: false
	  }
	return (
		<CCard className="py-4 px-4" style={{minHeight: "420px"}}>
			<CTabs activeTab="home" className="py-3">
			<CNav variant="pills" justified>
				<CNavItem>
					<CNavLink data-tab="home">
						Overview
					</CNavLink>
				</CNavItem>
				<CNavItem>
					<CNavLink data-tab="engagement">
						Engagement
					</CNavLink>
				</CNavItem>
				<CNavItem>
					<CNavLink data-tab="audience">
						Audience
					</CNavLink>
				</CNavItem>
				<CNavItem>
					<CNavLink data-tab="revenue">
						Revenue
					</CNavLink>
				</CNavItem>
				<CNavItem>
					<CNavLink data-tab="storage">
						Storage
					</CNavLink>
				</CNavItem>
			</CNav>



			<CTabContent className="mt-4 ">
				<CTabPane data-tab="home">
					<div className="row">
						<div className="col-lg-3 col-md-6 ">
							
									<h4 className="card-title">
										Users By Age 
									</h4>
									<ul className="list-group  cust-list">
										<li className="d-flex justify-content-between align-items-center  	list-group-item">
											0 - 10 Yrs 
											<span className="badge badge-light">
												45
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											10 - 20 Yrs 
											<span className="badge badge-light">
												15
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											20 - 30 Yrs 
											<span className="badge badge-light">
												35
											</span>
										</li>
										<li className="d-flex  justify-content-between align-items-center list-group-item">
											30 - 40 Yrs 
											<span className="badge badge-light">
												34
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											40 - 50 Yrs 
											<span className="badge badge-light">
												234
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											50 - 60 Yrs 
											<span className="badge badge-light">
												12
											</span>
										</li>
									</ul>
								</div>
				

						<div className="col-lg-3 col-md-6 ">
								<h4 className="card-title">Users By Gender</h4> 
								<ul className="list-group">
										<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Male 
											<span className="badge badge-light">
												60%
											</span>
											<div className="flex-grow-1 w-100 mt-3">
												<CProgress size="sm" color="success" value={60}  />
											</div>
										</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Female 
											<span className="badge badge-light">
												30%
											</span>
											<div className="flex-grow-1 w-100 mt-3">
												<CProgress size="sm" color="warning" value={30}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Others 
											<span className="badge badge-light">
												10%
											</span>
											<div className="flex-grow-1 w-100 mt-3">
												<CProgress size="sm" color="info" value={10}  />
											</div>
									</li>
								</ul>
							</div>
						
						{/* Languages */}
						<div className="col-lg-3 col-md-6 ">
							<h4 className="card-title">Languages Used </h4> 
							<ul className="list-group  cust-list">
										<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											English 
											<span className="badge badge-light">
												60%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="success" value={60}  />
											</div>
										</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Hindi 
											<span className="badge badge-light">
												18%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="warning" value={30}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Spanish 
											<span className="badge badge-light">
												12%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="info" value={10}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Punjabi 
											<span className="badge badge-light">
												10%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="danger" value={10}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Others 
											<span className="badge badge-light">
												10%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="danger" value={10}  />
											</div>
									</li>
								</ul>
						</div>
			
			
						<div className="col-lg-3 col-md-">
							<h4>Users By Locations</h4>
							<div className="chart-wrapper">
								{/* <CChart type="bar" datasets={bar.datasets} options={options} labels="Locations"/>	 */}
								<ul className="list-group  cust-list">
										<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Delhi 
											<span className="badge badge-light">
												60%
											</span>
											
										</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Punjab 
											<span className="badge badge-light">
												18%
											</span>
											
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											New Delhi 
											<span className="badge badge-light">
												12%
											</span>
										
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Haryana 
											<span className="badge badge-light">
												10%
											</span>
											
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Others 
											<span className="badge badge-light">
												10%
											</span>
											
									</li>
								</ul>
							</div>

						</div>
			
						<div className="col-lg-4 col-md-12">
							
						</div>
					</div>
				
					
		  		</CTabPane>
				<CTabPane data-tab="engagement">
				<div className="row">
						<div className="col-lg-3 col-md-6 ">
							
									<h4 className="card-title">
										Average Time Spent  
									</h4>
									<ul className="list-group  cust-list">
										<li className="d-flex justify-content-between align-items-center  	list-group-item">
											0 - 1 hour 
											<span className="badge badge-light">
												45
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											1 - 2 Hours 
											<span className="badge badge-light">
												15
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											2 - 3 Hours 
											<span className="badge badge-light">
												35
											</span>
										</li>
										<li className="d-flex  justify-content-between align-items-center list-group-item">
											3 - 4 Hours 
											<span className="badge badge-light">
												34
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											4 - 5 Hours 
											<span className="badge badge-light">
												234
											</span>
										</li>
										<li className="d-flex justify-content-between align-items-center  list-group-item">
											5 + Hours 
											<span className="badge badge-light">
												12
											</span>
										</li>
									</ul>
								</div>
				

						<div className="col-lg-3 col-md-6 ">
								<h4 className="card-title">Users By Gender</h4> 
								<ul className="list-group">
										<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Male 
											<span className="badge badge-light">
												60%
											</span>
											<div className="flex-grow-1 w-100 mt-3">
												<CProgress size="sm" color="success" value={60}  />
											</div>
										</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Female 
											<span className="badge badge-light">
												30%
											</span>
											<div className="flex-grow-1 w-100 mt-3">
												<CProgress size="sm" color="warning" value={30}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Others 
											<span className="badge badge-light">
												10%
											</span>
											<div className="flex-grow-1 w-100 mt-3">
												<CProgress size="sm" color="info" value={10}  />
											</div>
									</li>
								</ul>
							</div>
						
						{/* Languages */}
						<div className="col-lg-3 col-md-6 ">
							<h4 className="card-title">Languages Used </h4> 
							<ul className="list-group  cust-list">
										<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											English 
											<span className="badge badge-light">
												60%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="success" value={60}  />
											</div>
										</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Hindi 
											<span className="badge badge-light">
												18%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="warning" value={30}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Spanish 
											<span className="badge badge-light">
												12%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="info" value={10}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Punjabi 
											<span className="badge badge-light">
												10%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="danger" value={10}  />
											</div>
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Others 
											<span className="badge badge-light">
												10%
											</span>
											<div className="flex-grow-1 w-100 mt-2">
												<CProgress size="xs" color="danger" value={10}  />
											</div>
									</li>
								</ul>
						</div>
			
			
						<div className="col-lg-3 col-md-">
							<h4>Users By Locations</h4>
							<div className="chart-wrapper">
								{/* <CChart type="bar" datasets={bar.datasets} options={options} labels="Locations"/>	 */}
								<ul className="list-group  cust-list">
										<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Delhi 
											<span className="badge badge-light">
												60%
											</span>
											
										</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Punjab 
											<span className="badge badge-light">
												18%
											</span>
											
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											New Delhi 
											<span className="badge badge-light">
												12%
											</span>
										
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Haryana 
											<span className="badge badge-light">
												10%
											</span>
											
									</li>
									<li className="list-group-item justify-content-between d-flex  flex-wrap align-items-center ">
											Others 
											<span className="badge badge-light">
												10%
											</span>
											
									</li>
								</ul>
							</div>

						</div>
			
						<div className="col-lg-4 col-md-12">
							
						</div>
					</div>
				
					
		  		</CTabPane>
				<CTabPane data-tab="audience">
					789
		  		</CTabPane>
				<CTabPane data-tab="revenue">
					789
		  		</CTabPane>
				<CTabPane data-tab="storage">
					789
		  		</CTabPane>
			</CTabContent>
		</CTabs>
		</CCard>
	)
}
