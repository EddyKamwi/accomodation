"use client";
import { Learn } from "@/components";

export default function Googlemap() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <iframe
        className="map w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246161.65608637905!2d28.178937340319607!3d-15.41565458079908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194088f8010d6611%3A0xa1c2f8caa8af842f!2sWaterfalls%20Hotel!5e0!3m2!1sen!2szm!4v1724425856845!5m2!1sen!2szm"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
