export const PAGES = {
  home: {
    path: '/',
    title: 'Aerial & Ground Ladder Testing Nationwide | Command Testing',
    description: 'Based in Columbus, OH, Command Testing tests aerial devices and ground ladders for fire departments nationwide to NFPA 1910 (formerly NFPA 1911) and NFPA 1930 (formerly NFPA 1932). Fire pump testing is offered in central Ohio and at apparatus manufacturers. Work is performed by NDT Level II technicians with ASNT Level III oversight.',
  },
  aerial: {
    path: '/aerial',
    title: 'Aerial Ladder Testing | Command Testing',
    description: 'On-site aerial device testing for fire departments nationwide. Command Testing, based in Columbus, OH, tests to NFPA 1910 (formerly NFPA 1911). Newer apparatus are covered by NFPA 1900. Performed by NDT Level II technicians with ASNT Level III oversight.',
  },
  ground: {
    path: '/ground-ladders',
    title: 'Ground Ladder Testing | Command Testing',
    description: 'Annual ground ladder testing for fire departments nationwide, based in Columbus, OH. Testing follows NFPA 1930 (formerly NFPA 1932).',
  },
  pump: {
    path: '/pump',
    title: 'Fire Pump Testing in Central Ohio | Command Testing',
    description: 'Apparatus fire pump testing in central Ohio and at apparatus manufacturers, to NFPA 1910 (formerly NFPA 1911). Command Testing is based in Columbus, OH. Pump testing is not offered as a nationwide service.',
  },
  ndt: {
    path: '/ndt',
    title: 'Aerial NDT, Including 5-Year Testing | Command Testing',
    description: 'Nondestructive testing of aerial devices, including the five-year NDT called for by NFPA 1910 (formerly NFPA 1911). Performed by NDT Level II technicians with ASNT Level III oversight. Based in Columbus, OH.',
  },
};

export const SERVICES = {
  aerial: {
    path: '/aerial',
    nav: 'Aerial Ladder Testing',
    h1: 'Aerial ladder testing',
    accredited: true,
    imageKey: 'aerial',
    lede: 'We test in-service aerial devices at your station for fire departments nationwide. Command Testing is based in Columbus, OH.',
    included: [
      'A visual and operational inspection of the aerial device.',
      'The annual performance tests the in-service standard specifies for that device.',
      'A written record of what was tested and what we found.',
    ],
    standards: [
      'In-service inspection and testing follows NFPA 1910 (formerly NFPA 1911).',
      'Newer apparatus are built to NFPA 1900. The annual in-service test is still the NFPA 1910 test, including for apparatus that were built when NFPA 1901 was the construction standard.',
      'These NFPA documents are American National Standards. We test to the NFPA text. We do not cite a separate ANSI test method.',
      'Nondestructive testing of the aerial, including the five-year examination, is described on the NDT page. That work is performed by NDT Level II technicians with ASNT Level III oversight.',
    ],
    deliverables: [
      'A written report for the department’s records.',
      'The results of the inspection and the performance tests that were run.',
    ],
  },
  ground: {
    path: '/ground-ladders',
    nav: 'Ground Ladder Testing',
    h1: 'Ground ladder testing',
    accredited: false,
    imageKey: 'ladder',
    lede: 'We test ground ladders for fire departments nationwide, on site with your aerial and pump visits or on their own. Command Testing is based in Columbus, OH.',
    included: [
      'Inspection of each ladder presented for the annual test.',
      'The service tests NFPA 1930 (formerly NFPA 1932) specifies for ground ladders, including the strength and hardware checks in that standard.',
      'A written record you can keep with the ladder.',
    ],
    standards: [
      'Ground ladder testing follows NFPA 1930 (formerly NFPA 1932).',
      'NFPA 1900 applies to newer fire apparatus. It is not the ground-ladder test standard. Ladders carried on those apparatus are still tested to NFPA 1930.',
      'NFPA 1930 is an American National Standard. The test follows that NFPA text.',
    ],
    deliverables: [
      'A written report covering the ladders tested.',
      'Findings from the inspection and the service tests.',
    ],
  },
  pump: {
    path: '/pump',
    nav: 'Fire Pump Testing',
    h1: 'Fire pump testing',
    accredited: true,
    imageKey: 'pump',
    lede: 'We test apparatus fire pumps in central Ohio and at apparatus manufacturers. Pump testing is not a nationwide service. Command Testing is based in Columbus, OH.',
    included: [
      'A service test of the apparatus fire pump.',
      'The test is done where the pump can be supplied and the discharge can be handled safely.',
      'A written record of the test.',
    ],
    standards: [
      'In-service pump testing follows NFPA 1910 (formerly NFPA 1911).',
      'Newer apparatus are built to NFPA 1900. The in-service pump test remains the NFPA 1910 test.',
      'These NFPA documents are American National Standards. We follow the NFPA pump-test text rather than a separate ANSI procedure.',
    ],
    deliverables: [
      'A written report of the pump test for the department or the manufacturer.',
      'The pressures and conditions recorded during the test.',
    ],
  },
  ndt: {
    path: '/ndt',
    nav: 'Non-Destructive Testing',
    h1: 'Non-destructive testing',
    accredited: false,
    imageKey: 'ndt',
    lede: 'Nondestructive testing of aerial devices is performed by NDT Level II technicians with ASNT Level III oversight. Command Testing is based in Columbus, OH.',
    included: [
      'Visual testing of the areas the examination covers.',
      'Liquid penetrant, magnetic particle, and ultrasonic testing where the device and the standard call for those methods.',
      'The five-year aerial NDT, and NDT after overload, impact, heat exposure, or structural repair when that work is in the scope you ask us to do.',
    ],
    standards: [
      'The five-year interval comes from NFPA 1910 (formerly NFPA 1911). That standard calls for nondestructive testing of aerial devices at intervals not exceeding five years, in addition to the annual inspection and operational test. It also calls for NDT after certain overloads, damage, and repairs.',
      'NFPA 1900 is the construction standard for newer apparatus. It does not replace the in-service NDT interval in NFPA 1910.',
      'NFPA 1910 is an American National Standard. The examination follows the NDT provisions in that standard. We do not substitute a different ANSI weld code.',
    ],
    deliverables: [
      'A written report of the examination.',
      'The methods used and the areas examined.',
    ],
  },
};

export const FAQ = [
  {
    q: 'How often is testing done?',
    a: 'Under NFPA 1910 (formerly NFPA 1911), in-service aerial devices and fire pumps are inspected and performance-tested at least annually. Ground ladders are tested to NFPA 1930 (formerly NFPA 1932), which also uses an annual service test. Aerial nondestructive testing is a separate interval, not the same visit as every annual test. The edition your authority having jurisdiction has adopted is the one that applies to your department.',
  },
  {
    q: 'What is the five-year aerial NDT?',
    a: 'NFPA 1910 (formerly NFPA 1911) calls for nondestructive testing of an aerial device at intervals not exceeding five years, in addition to the annual inspection and operational test. The same standard calls for NDT after events such as overload, impact, or heat exposure, and after repairs that affect the structure. The examination is performed by NDT Level II technicians with ASNT Level III oversight.',
  },
  {
    q: 'What happened to NFPA 1911 and NFPA 1932?',
    a: 'NFPA 1911 is now published as NFPA 1910. NFPA 1932 is now published as NFPA 1930. A policy or bid that still names the older number is using the former designation. We test to the current NFPA text and we still cite the former numbers so those specifications match. Newer apparatus are built to NFPA 1900; the annual in-service tests remain NFPA 1910 and, for ground ladders, NFPA 1930.',
  },
  {
    q: 'How long does a visit take?',
    a: 'It depends on the number of aerial devices, the ground-ladder footage, and whether a pump test is included. We will not guess a duration from the truck type alone. When you request a quote, tell us the scope and we will schedule the time the work needs.',
  },
  {
    q: 'What does the department provide?',
    a: 'The apparatus and ladders to be tested, a safe place to work, and a person who can position the truck when it has to be moved. For a pump test, a water source and a place to discharge water. We bring the test equipment. Pump testing is available in central Ohio and at apparatus manufacturers, not as a nationwide stop on an aerial trip.',
  },
];
