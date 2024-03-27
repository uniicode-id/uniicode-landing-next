<template>
  <section class="p-4 border border-black">
    <home-decoration-member-background></home-decoration-member-background>

    <h1 class="text-5xl text-center font-bold mb-16">MEMBERS SPOTLIGHT</h1>
    <section class="flex align-middle w-2/3 text-center mx-auto gap-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, hic
        tempora quam neque ab eos sint non iusto ipsam delectus obcaecati culpa,
        quod reiciendis laboriosam, ea tenetur porro consequatur inventore?
      </p>
      <p class="text-6xl font-bold m-0 p-0">230+</p>
    </section>
    <section class="flex flex-col gap-3 w-full mt-32">
      <section class="flex flex-nowrap overflow-x-auto scrollbar-hide gap-3">
        <section
          class="uc-card bg-transparent h-max w-max min-w-[280px] max-w-[380px] flex flex-col place-content-center m-2 overflow-clip flex-shrink-0"
          v-for="member in membersFragment1"
          :key="member.name"
        >
          <section class="flex gap-8 m-4 mb-0">
            <section
              class="uc-card-img min-w-[128px] max-w-[128px] h-full max-h-[128px] rounded-[10px] overflow-hidden"
            >
              <img
                src="https://hortology.co.uk/cdn/shop/files/Nephrolepis-exaltata-Green-Lady-Green-Lady-Boston-Fern-20x60cm-Lagos-Plant-Pot-Cement-23x23.5cm_5421c052-c465-4d8a-bcb3-79c150693731.jpg?v=1694162413"
                alt="Fern"
                class="w-full h-auto"
              />
            </section>
            <section class="flex flex-col gap-5">
              <p>
                {{ member.description }}
              </p>
              <h4 class="font-bold">{{ member.name }}</h4>
              <h5 class="font-bold">{{ member.currentJobPosition }}</h5>
            </section>
          </section>
          <img
            src="/images/uc-card-divider.svg"
            alt="Divider"
            class="block w-full h-auto px-4"
          />
        </section>
      </section>
      <!-- Section Flex Row -->
      <section class="flex flex-nowrap overflow-x-auto scrollbar-hide gap-3">
        <section
          class="uc-card bg-transparent h-max w-max min-w-[280px] max-w-[380px] flex flex-col place-content-center m-2 overflow-clip flex-shrink-0"
          v-for="member in membersFragment2"
          :key="member.name"
        >
          <section class="flex gap-8 m-4 mb-0">
            <section
              class="uc-card-img min-w-[128px] max-w-[128px] h-full max-h-[128px] rounded-[10px] overflow-hidden"
            >
              <img
                src="https://hortology.co.uk/cdn/shop/files/Nephrolepis-exaltata-Green-Lady-Green-Lady-Boston-Fern-20x60cm-Lagos-Plant-Pot-Cement-23x23.5cm_5421c052-c465-4d8a-bcb3-79c150693731.jpg?v=1694162413"
                alt="Fern"
                class="w-full h-auto"
              />
            </section>
            <section class="flex flex-col gap-5">
              <p>
                {{ member.description }}
              </p>
              <h4 class="font-bold">{{ member.name }}</h4>
              <h5 class="font-bold">{{ member.currentJobPosition }}</h5>
            </section>
          </section>
          <img
            src="/images/uc-card-divider.svg"
            alt="Divider"
            class="block w-full h-auto px-4"
          />
        </section>
      </section>
      <!-- Section Flex Row -->
    </section>
    <!-- Section Flex Column -->
  </section>
</template>

<script setup lang="ts">
interface Member {
  description: string;
  name: string;
  currentJobPosition: string;
}

const membersFragment1: Member[] = [
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Toby H. Klein",
    currentJobPosition: "Back End Developer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Mary M. Parker",
    currentJobPosition: "Front End Developer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Colleen J. Altom",
    currentJobPosition: "UI/UX Designer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Tara P. Perry",
    currentJobPosition: "Front End Developer",
  },
];

const membersFragment2: Member[] = [
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Wayne H. Parrish",
    currentJobPosition: "Android Developer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Phillip B. Lawson",
    currentJobPosition: "Android Developer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Hector L. Jones",
    currentJobPosition: "DevOps Engineer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Anh J. Partain",
    currentJobPosition: "Flutter Developer",
  },
  {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Caitlin D. Whitaker",
    currentJobPosition: "Fullstack Web Developer",
  },
];
</script>

<style scoped>
.uc-card {
  background: radial-gradient(
        circle at 100% 100%,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 1) 18px,
        transparent 18px
      )
      0% 0%/20px 20px no-repeat,
    radial-gradient(
        circle at 0 100%,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 1) 18px,
        transparent 18px
      )
      100% 0%/20px 20px no-repeat,
    radial-gradient(
        circle at 100% 0,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 1) 18px,
        transparent 18px
      )
      0% 100%/20px 20px no-repeat,
    radial-gradient(
        circle at 0 0,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 1) 18px,
        transparent 18px
      )
      100% 100%/20px 20px no-repeat,
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)) 50% 50% /
      calc(100% - 4px) calc(100% - 40px) no-repeat,
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)) 50% 50% /
      calc(100% - 40px) calc(100% - 4px) no-repeat,
    linear-gradient(222deg, #ccff00 0%, #000000 100%);
  border-radius: 20px;
  padding: 32px;
  box-sizing: content-box;
}

.uc-card-img {
  border: 1px solid rgba(204, 255, 0, 1);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
