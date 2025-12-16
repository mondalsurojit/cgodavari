import { href } from "react-router-dom";

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Deliverables', href: '/deliverables' },
  { label: 'Reports', href: '/reports' },
  { label: 'Members', href: '/members' },
  // { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/hero/1.jpeg',
    title: 'MoA Signing & Initiation Workshop of CAMP for 6 River Basin held at DAIC, New Delhi; Feb 28, 2024',
  },
  {
    id: 2,
    image: '/hero/2.jpeg',
    title: 'MoA Signing & Initiation Workshop of CAMP for 6 River Basin held at DAIC, New Delhi; Feb 28, 2024',
  },
  {
    id: 3,
    image: '/hero/3.jpeg',
    title: 'Initiation Workshop IIT Hyderabad',
  },
  {
    id: 4,
    image: '/hero/4.jpeg',
    title: 'Joint review committee meeting held at IIT Hyderabad, 23 May, 2024',
  },
  {
    id: 5,
    image: '/hero/5.jpeg',
    title: 'Joint review committee meeting held at IIT Hyderabad, 23 May, 2024',
  },
];


export const RESEARCH_AREAS = [
  {
    id: 1,
    title: 'River Health Assessment',
    description: 'Comprehensive monitoring and evaluation of water quality, biodiversity, and ecological indicators across the Godavari basin.',
    image: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?w=600'
  },
  {
    id: 2,
    title: 'Water Resource Management',
    description: 'Integrated approaches to sustainable water allocation, irrigation optimization, and groundwater recharge strategies.',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8e6?w=600'
  },
  {
    id: 3,
    title: 'Climate Change Impact',
    description: 'Analysis of climate variability effects on river flow patterns, monsoon dynamics, and long-term basin resilience.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600'
  },
  {
    id: 4,
    title: 'Flood Management',
    description: 'Advanced modeling and early warning systems for flood prediction, risk assessment, and disaster mitigation.',
    image: 'https://images.unsplash.com/photo-1547038577-4b3dca6b9c1b?w=600'
  }
];

export const TEAM = {
  mentor: [
    {
      id: 1,
      name: "B. S. Murty",
      designation: "Director",
      image: "/members/director.png",
      website: "https://iith.ac.in/msme/bsm/",
      email: "director@iith.ac.in",
      linkedin: "https://in.linkedin.com/in/prof-b-s-murty-3b1370271"
    }
  ],

  faculty: [
    {
      id: 1,
      name: "Asif Qureshi",
      designation: "Professor",
      institution: "Dept. of Civil Engineering",
      image: "/members/faculty/1.jpeg",
      website: "https://people.iith.ac.in/asif/",
      email: "asif@ce.iith.ac.in",
      linkedin: "https://www.linkedin.com/in/asif-qureshi-220204303"
    },
    {
      id: 2,
      name: "Debraj Bhattacharyya",
      designation: "Professor",
      institution: "Dept. of Civil Engineering",
      image: "/members/faculty/2.jpeg",
      website: "https://people.iith.ac.in/debrajb/",
      email: "debrajb@ce.iith.ac.in",
      linkedin: "https://www.linkedin.com/in/debraj-bhattacharyya-9286a115"
    },
    {
      id: 3,
      name: "K. P. Prabheesh",
      designation: "Professor",
      institution: "Dept. of Liberal Arts",
      image: "/members/faculty/3.jpeg",
      website: "https://sites.google.com/la.iith.ac.in/prabheesh/home",
      email: "prabheesh@la.iith.ac.in",
      linkedin: "https://www.linkedin.com/in/k-p-prabheesh-580b23278"
    },
    {
      id: 4,
      name: "Satish Regonda",
      designation: "Associate Professor",
      institution: "Dept. of Civil Engineering",
      image: "/members/faculty/4.jpeg",
      website: "https://sites.google.com/iith.ac.in/satishregonda/home",
      email: "satishr@ce.iith.ac.in",
      linkedin: "https://www.linkedin.com/in/satish-regonda-3a08a115"
    },
    {
      id: 5,
      name: "Anindita Majumdar",
      designation: "Associate Professor",
      institution: "Dept. of Liberal Arts",
      image: "/members/faculty/5.jpeg",
      website: "https://sites.google.com/iith.ac.in/aninditamajumdar/home",
      email: "anindita@la.iith.ac.in",
      linkedin: "https://www.linkedin.com/in/anindita-majumdar-563170b0"
    }
  ],

  projectStaff: [
    {
      id: 1,
      name: "Dr. Mir Sumira",
      designation: "Project Scientist",
      image: "/members/staffs/1.png"
    },
    {
      id: 2,
      name: "Dr. Sri Vidhya Mummidi",
      designation: "Project Scientist",
      image: "/members/staffs/2.jpg"
    },
    {
      id: 3,
      name: "Srija Dangudubiyyam",
      designation: "Research Associate",
      image: "/members/staffs/4.jpeg"
    },
    {
      id: 4,
      name: "Syed Azharuddin Hashmi",
      designation: "Project Associate",
      image: "/members/staffs/3.jpg"
    },
    {
      id: 5,
      name: "Soumya Ranjan Sahoo",
      designation: "Project Assistant",
      image: "/members/staffs/7.jpg"
    },
    {
      id: 6,
      name: "Thangalapally Rahul",
      designation: "Project Assistant",
      image: "/members/staffs/8.jpg"
    },
    {
      id: 7,
      name: "Essapally Naresh",
      designation: "Project Assistant",
      image: "/members/staffs/9.jpg"
    },
    {
      id: 8,
      name: "Fathima Fakiha Imam Khan",
      designation: "Project Assistant",
      image: "/members/staffs/10.jpeg"
    },
    {
      id: 9,
      name: "Dhanshri Bawankar",
      designation: "Project Assistant",
      image: "/members/staffs/6.jpg"
    },
    {
      id: 10,
      name: "Ashis Sarkar",
      designation: "Project Assistant",
      image: "/members/staffs/11.jpeg"
    },
    {
      id: 11,
      name: "Aaliya Mariam",
      designation: "Project Assistant",
      image: "/members/staffs/5.jpeg"
    },
    {
      id: 12,
      name: "Surojit Mondal",
      designation: "Intern",
      image: "/members/staffs/12.jpg"
    }
  ]
};

export const CONTACT_INFO = {
  address: {
    line1: 'Technological Research Park, IIT Hyderabad',
    line2: 'Near NH-65, Sangareddy, Kandi, Telangana 502285',
  },
  email: 'asif@ce.iith.ac.in',
  phone: '+91 040 2301 6000'
};

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/cgodavari.india/' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/cgodavari-india-074018331/' },
  { name: 'Youtube', url: 'https://www.youtube.com/channel/UCWI-5b0c3oWTlsWlhQfPJ5Q' }
];

export const LOGOS = [
  {
    "name": "1",
    "url": "/member_institutes/1.jpeg"
  },
  {
    "name": "2",
    "url": "/member_institutes/2.jpeg"
  },
  {
    "name": "3",
    "url": "/member_institutes/3.jpeg"
  },
  {
    "name": "4",
    "url": "/member_institutes/4.jpeg"
  },
  {
    "name": "5",
    "url": "/member_institutes/5.jpeg"
  },
  {
    "name": "6",
    "url": "/member_institutes/6.jpeg"
  },
  {
    "name": "7",
    "url": "/member_institutes/7.jpeg"
  },
  {
    "name": "8",
    "url": "/member_institutes/8.jpeg"
  },
  {
    "name": "9",
    "url": "/member_institutes/9.jpeg"
  },
  {
    "name": "10",
    "url": "/member_institutes/10.jpeg"
  },
  {
    "name": "11",
    "url": "/member_institutes/11.jpeg"
  },
  {
    "name": "12",
    "url": "/member_institutes/12.jpeg"
  }
];

export const DELIVERABLES_DATA = [
  {
    quarter: 'Quarter 1',
    items: [
      {
        title: 'River at a Glance',
        outcome:
          'Provide an overview of salient features of some significant aspects and critical issues relating to rejuvenation and conservation of important rivers in the basin',
      },
    ],
  },
  {
    quarter: 'Quarter 2',
    items: [
      {
        title: 'Basin Demography',
        outcome:
          'Population characteristics and trends within urban and rural areas to assess and analyse resource utilization (land, water, energy, etc) and residue/waste generation (solid, liquid and gaseous) for impact on river systems and strategising for remedial actions.',
      },
      {
        title: 'Aerial/ drone surveys, Aerial photographs',
        outcome:
          "Mapping the river's course, its tributaries, and the surrounding landscape for understanding the river basin's geography and how it changes over time due to natural or human-induced factors",
      },
    ],
  },
  {
    quarter: 'Quarter 3',
    items: [
      { title: 'Lithological profile', outcome: 'Landslide assessment' },
      { title: 'Hydraulic data', outcome: 'For Hydraulic model' },
      { title: 'Hydrologic data', outcome: 'For Hydrologic model' },
      {
        title: 'Infrastructure and Planning Report',
        outcome:
          'Identifying critical habitats, biodiversity hotspots, and ecologically sensitive areas within the river basin that need protection or restoration. Guide the development of flood control strategies, such as the construction of levees, dams, or drainage systems.',
      },
      {
        title: 'Geomorphological Mapping',
        outcome:
          'Estimation of spatio-temporal rate of bank erosion and morphological changes in natural rivers',
      },
    ],
  },
  {
    quarter: 'Quarter 4',
    items: [
      {
        title: 'River Atlas',
        outcome:
          'Collection and collation of information about geography of all drains, rivulets, streams and rivers in the basin',
      },
      { title: 'Climatologic/ Meteorological Data', outcome: 'Climate model' },
      {
        title: 'Geological Profile',
        outcome:
          'Estimation of potential activities impacting geological identity of the basin',
      },
      {
        title: 'Topographic maps',
        outcome:
          "To understand the river's flow characteristics, drainage patterns, which are essential for managing water resources and predicting flood zones.",
      },
      {
        title: 'Revenue map',
        outcome:
          'By showing land use patterns, revenue maps help in identifying areas that are over-exploited or at risk of environmental degradation, guiding conservation, planning agriculture development projects and sustainable land use strategies.',
      },
      {
        title: 'Learnings from the work done in other Indian basins',
        outcome:
          'Best Practices in Water Management, Ecosystem Restoration Efforts, Policy and Governance Models, Technological Innovations',
      },
      {
        title: 'Learnings from the work done in other International basins',
        outcome:
          'Best Practices in Water Management, Ecosystem Restoration Efforts, Policy and Governance Models, Technological Innovations',
      },
      {
        title: 'Approaches and activities to river-people connect',
        outcome: 'Community Engagement Strategies',
      },
      {
        title: 'Legal constraints such as inter-state agreements',
        outcome:
          'Provide framework and guidelines for collaboration and conflict resolution between multiple jurisdictions',
      },
      {
        title: 'Social environment (water-related institutions, interest groups, public awareness)',
        outcome:
          'Implementation of policies on ground and creating public awareness',
      },
      {
        title:
          'Developing Protocol for Initiating Monitoring and Feedback of Various Implementation Strategies/ Plans/ Programmes/ Projects',
        outcome:
          'The protocol outlined in the report can be used as a guideline for implementing various projects and programs in the river basin, ensuring they are carried out as planned and meet their intended objectives; performance evaluation; feedback; stakeholder engagement;',
      },
    ],
  },
  {
    quarter: 'Quarter 5',
    items: [
      {
        title: 'Water Demand and Supply Report',
        outcome:
          'Availability of water resources and the demand from various sectors such as agriculture, industry, and domestic use. This information is crucial for managing water allocations and ensuring sustainable use of water resources.',
      },
      {
        title: 'Agricultural Profile',
        outcome:
          'Crop planning and sustainable farming practices that are most likely to succeed in the river basin.',
      },
      { title: 'Flood hazard model', outcome: 'Identification of flood risk' },
    ],
  },
  {
    quarter: 'Quarter 6',
    items: [
      {
        title: 'Waterbodies Atlas',
        outcome:
          'Provides detailed information about various waterbodies within the basin, such as rivers, lakes, ponds, reservoirs, and wetlands. Can guide the management and allocation of water resources, helping to balance the needs of different users such as agriculture, industry, domestic consumption.',
      },
      {
        title: 'Pollution load Report',
        outcome:
          'Pinpointing the exact sources of pollution, whether they are industrial discharges, agricultural runoff, sewage outflows, or other sources. This is crucial for targeting cleanup and prevention efforts.',
      },
      {
        title: 'Hydraulic Model',
        outcome: 'Stage Discharge relation at ungauged stations',
      },
      {
        title: 'Climate Change Assessment Report',
        outcome:
          'With potential changes in precipitation patterns and water availability, the report can guide the sustainable management of water resources, for agricultural, industrial, and domestic needs.',
      },
      {
        title: 'Pollutant source map',
        outcome: 'Identification of pollution hot spots',
      },
      {
        title: 'Designing a pilot for initiating Monitoring and Feedback',
        outcome:
          'Providing a blueprint for how to set it up, what parameters to monitor, and how to collect and analyze data; serve as a training ground for engaging local stakeholders',
      },
    ],
  },
  {
    quarter: 'Quarter 7',
    items: [
      {
        title: 'Land Use/Land Cover',
        outcome:
          'The LULC report can be used in water resource management by showing how different land uses and land cover impact water quality and availability.',
      },
      {
        title: 'Biological Profile of Basin',
        outcome:
          'The profile can guide ecological restoration efforts by providing insights into the native species and habitats that need to be preserved or restored.',
      },
      {
        title: 'Physio-chemical and Biological Profile',
        outcome:
          'The physio-chemical data (like pH, turbidity, dissolved oxygen levels, and presence of pollutants) is crucial for assessing and managing the water quality of the river. This information guides actions to address pollution and ensure the river water meets standards for various uses.',
      },
      {
        title: 'Industrial profile Report',
        outcome:
          'Comprehensive information about the types, distribution, and impacts of industries within the basin area for water usage by the industries, pollution levels, waste generation, and resource usage.',
      },
      {
        title: 'Water Balance/ Accounts/Budget as per delineated administrative and natural boundaries',
        outcome: 'Water budget of watersheds',
      },
      {
        title: 'Hydrological Model',
        outcome:
          'Identification & quantification of significantly impacted and/or critical hydrological components affecting stream flows',
      },
      {
        title: 'Assessment of gross agricultural structure of the basin',
        outcome: 'Potential for agriculture development in the basin',
      },
      {
        title: 'Nutrient and sediments load management',
        outcome:
          'Identify the current and possible practices affecting natural nutrient recycling',
      },
      {
        title: 'Flood management techniques',
        outcome:
          'Impact assessment of currently used techniques for flood risk mitigation',
      },
    ],
  },
  {
    quarter: 'Quarter 8',
    items: [
      {
        title:
          'Identification of major threats and challenges for attaining Nirmal Dhara',
        outcome:
          'Conservation, Management Strategies, and Policy Measures',
      },
      {
        title:
          'Mapping of best practices in Solid-Liquid waste management – National and International',
        outcome:
          'Guide the development or enhancement of infrastructure, such as modern recycling facilities, waste-to-energy plants',
      },
      {
        title:
          'Map of suitable locations for forestation, orchards and organic farming',
        outcome:
          'Map can guide afforestation efforts for better water management (reduce runoff, enhance groundwater recharge, and improve water quality by minimizing chemical inputs.)',
      },
      {
        title:
          'Identification of the major threats and challenges for basin protection from natural disasters',
        outcome:
          'Conservation management strategy, and policy measures',
      },
      {
        title: 'Identification of the major threats and challenges for rivers',
        outcome:
          'For conservation management strategy, and policy measures',
      },
    ],
  },
  {
    quarter: 'Quarter 9',
    items: [
      {
        title: 'E-Flows Assessment Report',
        outcome: 'Recommendations for maintaining river health',
      },
      {
        title: 'Sediment budget Report',
        outcome:
          'Identification of critical erosion & deposition zones of rivers (with quantitative estimates where possible) and likely river instabilities',
      },
      {
        title: 'Management plan for domestic wastewater',
        outcome:
          'Assessment of existing domestic waste management practices in rural and urban sectors',
      },
      {
        title: 'Management plan for industrial wastewater',
        outcome:
          'Assessment of existing industrial waste management practices in rural and urban sectors',
      },
      {
        title: 'Management plan for solid waste',
        outcome:
          'Assessment of existing solid waste management practices in rural and urban sectors',
      },
      {
        title: 'Plan for rejuvenation of water bodies',
        outcome: 'Effective use plan of waterbodies in the basin',
      },
      {
        title: 'Mapping of agricultural runoff and nutrient cycling',
        outcome:
          'Monitor and manage water quality in the river basin, setting standards and implementing policies to control nutrient levels in water bodies.',
      },
      {
        title:
          'Mapping of various stakeholders, schemes, and economics involved',
        outcome:
          'Impact assessment of existing and proposed governance schemes and policies',
      },
      {
        title:
          'Report on Identification of the major threats to biodiversity in the basin, management, conservation challenges and measures of restoration',
        outcome:
          'Detailed insights into the specific threats to biodiversity in the river basin, such as pollution, habitat loss, invasive species, or climate change. This information is essential for developing targeted mitigation strategies.',
      },
      {
        title: 'Agricultural management practices',
        outcome: 'Potential for agriculture development in the basin',
      },
      {
        title:
          'Mapping of the potential natural and anthropogenic threats to the geological base of river basin',
        outcome:
          'Identify potential activities impacting geological identity of the basin',
      },
      {
        title: 'Groundwater exploitation and status',
        outcome:
          'Identification of zones facing severe water scarcity (current and future)',
      },
      {
        title:
          'Identification of the major threats and challenges for safeguarding a geological repository',
        outcome:
          'Assessment of potential risks, such as seismic activity, flooding, soil erosion, or human-induced threats, enabling the development of comprehensive risk mitigation and management plans.',
      },
    ],
  },
  {
    quarter: 'Quarter 10',
    items: [],
  },
  {
    quarter: 'Quarter 11',
    items: [
      {
        title:
          'Identification of agricultural factors affecting the river and proposed corrective measures',
        outcome:
          'Impact assessment of current agricultural practices on the existing water nexus of the basin',
      },
    ],
  },
  {
    quarter: 'Quarter 12',
    items: [
      {
        title: 'Implementing pilot(s) for Monitoring and Feedback',
        outcome:
          'Utilize findings from the pilot projects to influence policy and decision-making. The report should provide a basis for advocating for effective river basin management policies.',
      },
    ],
  },
];
