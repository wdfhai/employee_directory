export const LoadingError = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{color: "red"}}>Error:{props.error}</td>
        </tr>
      </tbody>
    </table>
  )
}