<template>
    <div>
        <h5>Announcements</h5>
        <div class="ms-2 mb-2">
            <a href="#uploadAnnouncement" data-bs-toggle="collapse" @click.prevent>
                See upload beatmaps announcement
                <i class="fas fa-angle-down" />
            </a>
            <div id="uploadAnnouncement" class="collapse">
                <textarea
                    v-model="uploadBeatmapText"
                    length="4"
                    class="ml-1 form-control"
                    maxlength="40000"
                    rows="6"
                />
                <button class="btn btn-sm w-100 btn-primary mt-2" @click="sendAnnouncement($event)">
                    Send announcement
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Contest } from '@interfaces/contest/contest';

export default defineComponent({
    name: 'ContestAnnouncements',
    props: {
        contest: {
            type: Object as () => Contest,
            required: true,
        },
    },
    data () {
        return {
            uploadBeatmapText: `hello! results for [${this.contest.name}](${this.contest.url}) are finalized, so you can upload your map! the winners will be linked in the results news post\n\nthats all :)`,
        };
    },
    methods: {
        async sendAnnouncement(e): Promise<void> {
            const result = confirm(`Are you sure?`);

            if (result) {
                const announcement = await this.$http.executePost(`/contests/listing/${this.contest.id}/sendAnnouncement`, { text: this.uploadBeatmapText }, e);

                if (!this.$http.isError(announcement)) {
                    this.$store.dispatch('updateToastMessages', {
                        message: `Announcement sent`,
                        type: 'info',
                    });
                }
            }
        },
    },
});
</script>