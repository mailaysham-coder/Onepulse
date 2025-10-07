 React, { useState, useEffect, useRef } from 'react';
<div className="grid md:grid-cols-3 gap-6">
<div className="p-4 bg-white rounded shadow">
<h4 className="font-semibold">1. Chat</h4>
<p className="text-sm text-slate-600">Patients talk to PulseBot for reminders and guidance.</p>
</div>
<div className="p-4 bg-white rounded shadow">
<h4 className="font-semibold">2. Local Learning</h4>
<p className="text-sm text-slate-600">Data stays on-device or in-hospital systems. Models train locally.</p>
</div>
<div className="p-4 bg-white rounded shadow">
<h4 className="font-semibold">3. Federated Update</h4>
<p className="text-sm text-slate-600">Only model updates (encrypted) are shared to improve global performance — preserving privacy.</p>
</div>
</div>
</div>
</section>


<section id="features" className="py-12">
<div className="max-w-4xl mx-auto px-6">
<h3 className="text-2xl font-semibold mb-4">Features</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="p-4 bg-white rounded shadow">
<h5 className="font-semibold">Personalized Reminders</h5>
<p className="text-sm text-slate-600">Medication, appointments, glucose checks — scheduled and adaptive reminders.</p>
</div>
<div className="p-4 bg-white rounded shadow">
<h5 className="font-semibold">Digital Marker Tracking</h5>
<p className="text-sm text-slate-600">Log vitals manually or integrate with wearables and devices.</p>
</div>
<div className="p-4 bg-white rounded shadow">
<h5 className="font-semibold">Clinician Dashboard</h5>
<p className="text-sm text-slate-600">Visual summaries and alerts for early intervention (prototype stage).</p>
</div>
<div className="p-4 bg-white rounded shadow">
<h5 className="font-semibold">Privacy by Design</h5>
<p className="text-sm text-slate-600">Federated learning ensures raw data never leaves the origin system.</p>
</div>
</div>
</div>
</section>


<section id="contact" className="bg-white py-12">
<div className="max-w-4xl mx-auto px-6">
<h3 className="text-2xl font-semibold mb-4">About & Contact</h3>
<p className="text-slate-700">OnePulse — created by Aysha M. Rafeeque. Research Assistant & medical student, collaborating with LIOS / BBCE project partners in Latvia.</p>
<p className="mt-4 text-sm text-slate-600">Interested in a pilot? Email: <a className="text-sky-600" href="mailto:aysha.rafeeque@example.com">aysha.rafeeque@example.com</a></p>
</div>
</section>
</main>


<footer className="py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} OnePulse — Privacy-first chronic care companion</footer>
</div>
);
}


/*
