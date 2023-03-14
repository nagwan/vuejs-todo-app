<template></template>

<script>
export default {
    methods: {
        setTaskAlarm() {
            // to get the time and date of a task

            let userAlarmInput = new Date(this.taskTimer);

            // count every 1 sec

            let countDown = setInterval(() => {
                let getTheCurrentDateAndTime = new Date();

                let distanceCountFromTo =
                    userAlarmInput - getTheCurrentDateAndTime;

                // calculate time

                let days = Math.floor(
                    distanceCountFromTo / (1000 * 60 * 60 * 24)
                );
                let hours = Math.floor(
                    (distanceCountFromTo % (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                );
                let minutes = Math.floor(
                    (distanceCountFromTo % (1000 * 60 * 60)) / (1000 * 60)
                );
                let seconds = Math.floor(
                    (distanceCountFromTo % (1000 * 60)) / 1000
                );

                // if count is done

                if (
                    days === 0 &&
                    hours === 0 &&
                    minutes === 0 &&
                    seconds === 0
                ) {
                    clearInterval(countDown);

                    console.log("it`s time for ur task");
                }
            }, 1000);

            this.$emit("updateLocalStorage");

            this.$emit("alarm-setting");
        },
    },
};
</script>

<style lang='sass' scoped>
@import '../mediaQuery'
</style>
