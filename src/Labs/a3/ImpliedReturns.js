function ImpliedReturns() {
    const multiply = (a, b) => a * b; 
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
  return (
    <div>
        <h3>Implied Returns</h3>
        fourTimesFive = {fourTimesFive}
    </div>
  );
}

export default ImpliedReturns;
