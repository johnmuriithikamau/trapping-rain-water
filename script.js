function Solution() {}

Solution.prototype.trap = function (height) {
  if (!height.length) return 0;

  let i = 0,
    r = height.length - 1,
    leftMax = height[i],
    rightMax = height[r],
    res = 0;

  while (i < r) {
    if (leftMax < rightMax) {
      i++;
      leftMax = Math.max(leftMax, height[i]);
      res += leftMax - height[i];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
      leftMax = Math.max(leftMax, height[i]);
    }
  }

  return res;
};

function calculateWater() {
  const input = document.getElementById("heights");
  const heights = input.value.split(",").map((height) => parseInt(height));
  const solution = new Solution();
  const result = solution.trap(heights);
  const output = document.getElementById("result");
  output.textContent = `The maximum amount of water that can be trapped is ${result}.`;
}