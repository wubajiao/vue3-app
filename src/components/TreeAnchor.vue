<template>
  <a-tree blockNode :data="treeData" size="small" @select="onSelect" />
</template>
<script>
export default {
  setup() {
    const treeData = [
      {
        title: "11111",
        key: "1",
        children: [
          {
            title: "22222",
            key: "2",
            children: [],
          },
          {
            title: "33333",
            key: "3",
          },
          {
            title: "44444",
            key: "4",
          },
          {
            title: "55555",
            key: "5",
            children: [],
          },
          {
            title: "66666",
            key: "6",
          },
          {
            title: "77777",
            key: "7",
          },
        ],
      },
      {
        title: "88888",
        key: "8",
        children: [
          {
            title: "99999",
            key: "9",
             
          },
        ],
      },
    ];

    const onSelect = (selectedKeys, info) => {
      console.log(selectedKeys, info);
      const anchor = selectedKeys[0];
      const element = document.getElementById(anchor);
      if (element) {
        // 锚点定位动画
        element.scrollIntoView({ behavior: "smooth" });
        // 为了url带上锚点，以刷新页面的时候锚点也能起作用
        setTimeout(() => {
          window.location.hash = `#${anchor}`;
        }, 500);
      }
    };

    return {
      treeData,
      onSelect,
    };
  },
};
</script>
