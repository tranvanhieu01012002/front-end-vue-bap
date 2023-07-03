<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-4">
    <div>
      {{
        isSupported
          ? "Bluetooth Web API Supported"
          : "Your browser does not support the Bluetooth Web API"
      }}
    </div>

    <div v-if="isSupported">
      <button @click="">Request Bluetooth Device</button>
    </div>

    <div v-if="device">
      <p>Device Name: {{ device.name }}</p>
      <p>battery: {{ batteryPercent }}</p>
    </div>

    <div v-if="isConnected" class="bg-green-500 text-white p-3 rounded-md">
      <p>Connected</p>
    </div>

    <div v-if="!isConnected" class="bg-orange-800 text-white p-3 rounded-md">
      <p>Not Connected</p>
    </div>

    <div v-if="error">
      <div>Errors:</div>
      <pre>
        <code class="block p-5 whitespace-pre">{{ error }}</code>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBluetooth } from "@vueuse/core";

const { isSupported, isConnected, device, requestDevice, server, error } =
  useBluetooth({
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  });

const batteryPercent = ref<undefined | number>();

const isGettingBatteryLevels = ref(false);

async function getBatteryLevels() {
  isGettingBatteryLevels.value = true;

  // Get the battery service:
  const batteryService = await server.value.getPrimaryService(
    "battery_service"
  );

  // Get the current battery level
  const batteryLevelCharacteristic = await batteryService.getCharacteristic(
    "battery_level"
  );

  // Listen to when characteristic value changes on `characteristicvaluechanged` event:
  batteryLevelCharacteristic.addEventListener(
    "characteristicvaluechanged",
    (event: any) => {
      batteryPercent.value = event.target.value.getUint8(0);
    }
  );

  // Convert received buffer to number:
  const batteryLevel = await batteryLevelCharacteristic.readValue();
  console.log(batteryLevel);
  batteryPercent.value = await batteryLevel.getUint8(0);
}
const handle = async () => {
  await requestDevice();
  await getBatteryLevels();
};
</script>
