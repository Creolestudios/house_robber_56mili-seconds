var rob = function(nums) {


    // Approach-1
    // var curr = 0;
    // var prev = 0;

    // for(var i=0; i<nums.length; i++)
    // {
    //     let temp = curr;
    //     curr = Math.max(curr , prev+nums[i]);
    //     prev = temp;
    // }

    // return Math.max(prev,curr);

    const n = nums.length;
    // if array is empty 
    if (n === 0) {
        return 0;
    }
    

    // if array has only single element
    if (n === 1) {
        return nums[0];
    }
    
    // initialize new dp array
    var dparr = [];

    // store first element of array in dp 
    dparr[0] = nums[0];

    // get max of first two elements
    dparr[1] = Math.max(nums[0], nums[1]);
    
    // start iterating from second element 
    for (let i = 2; i < n; i++) {

        // update maximum element in dp array for every index
        dparr[i] = Math.max(dparr[i - 1], dparr[i - 2] + nums[i]);
    }
    
    // return last element as it will contain maximum sum uptill now 
    return dparr[n - 1];

   
};
