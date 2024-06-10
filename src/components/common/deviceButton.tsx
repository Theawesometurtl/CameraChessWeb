import { useEffect, useState } from "react";

const DeviceButton = ({ videoRef }: {videoRef: any }) => {
  console.log("device button time")
  const [streamUrl, setStreamUrl] = useState<string>("");

  useEffect(() => {
    // Replace "raspberry_pi_ip" and "port" with your Raspberry Pi's IP address and port number
    const streamUrl = `http://192.168.1.77/zm/cgi-bin/nph-zms?mode=jpeg&monitor=1%27`;
    setStreamUrl(streamUrl);
  }, []);

  return (
    <div>
      <video ref={videoRef} controls autoPlay></video>
      <button onClick={() => videoRef.current.src = streamUrl}>Start Streaming</button>
    </div>
  );
};

export default DeviceButton;















// import { useEffect, useState } from "react";
// import { MEDIA_CONSTRAINTS } from "../../utils/constants";

// const DeviceButton = ({ videoRef }: {videoRef: any }) => {
//   const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
//   const [device, setDevice] = useState<MediaDeviceInfo | null>(null);

//   const handleClick = async (e: any, newDevice: MediaDeviceInfo) => {
//     e.preventDefault();

//     if (device?.deviceId === newDevice.deviceId) {
//       return;
//     }

//     setDevice(newDevice);

//     const constraints: any = {...MEDIA_CONSTRAINTS}
//     constraints["video"]["deviceId"] = newDevice.deviceId
//     const stream = await navigator.mediaDevices.getUserMedia(constraints);
//     videoRef.current.srcObject = stream;
//   }

//   useEffect(() => {
//     const newDevices: MediaDeviceInfo[] = [];
//     navigator.mediaDevices
//     .enumerateDevices()
//     .then((devices) => {
//       devices.forEach((device: MediaDeviceInfo) => {
//         if (device.kind != "videoinput") {
//           return;
//         }
//         newDevices.push(device);
//       });
//     })
//     .catch((err) => {
//       console.error(`${err.name}: ${err.message}`);
//     });

//     setDevices(newDevices);
//   }, [])

//   return (
//     <div className="dropdown">
//       <button className="btn btn-dark btn-sm btn-outline-light dropdown-toggle w-100" id="deviceButton" data-bs-toggle="dropdown" aria-expanded="false">
//       {(device === null) ? "Select a Device": `Device: ${device.label.split("(")[0]}`}
//       </button>
//       <ul className="dropdown-menu" aria-labelledby="deviceButton">
//         {devices.map(device => 
//           <li key={device.deviceId}>
//             <a onClick={(e) => handleClick(e, device)} className="dropdown-item" href="#">
//               {device.label.split("(")[0]}
//             </a>
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default DeviceButton;