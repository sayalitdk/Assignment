import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../ButtonComponent/ButtonStyle";
import { ButtonSectionStyle } from "./ButtonSectionStyle";
const ButtonSection = () => {
  return (
    <ButtonSectionStyle>
      <table>
        <thead>
          <th>Name</th>
          <th>Normal</th>
          <th>Small</th>
          <th>Disabled</th>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td>
              <PrimaryButton testid={"Normal Primary"}>Normal</PrimaryButton>
            </td>
            <td>
              <PrimaryButton smallSize testid={"Small Primary"}>
                Small
              </PrimaryButton>
            </td>
            <td testid={"Disabled Primary"}>
              <PrimaryButton disabled>Disabled</PrimaryButton>
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <SecondaryButton testid={"Normal Secondary"}>
                Normal
              </SecondaryButton>
            </td>
            <td>
              <SecondaryButton smallSize testid={"Small Secondary"}>
                Small
              </SecondaryButton>
            </td>
            <td testid={"Disabled Secondary"}>
              <SecondaryButton disabled>Disabled</SecondaryButton>
            </td>
          </tr>
          <tr>
            <td>Tertiary</td>
            <td>
              <TertiaryButton testid={"Normal Tertiary"}>Normal</TertiaryButton>
            </td>
            <td>
              <TertiaryButton testid={"Small Tertiary"} smallSize>
                Small
              </TertiaryButton>
            </td>
            <td>
              <TertiaryButton testid={"Disabled Tertiary"} disabled>
                Disabled
              </TertiaryButton>
            </td>
          </tr>
          <tr style={{ "background-color": "#31404a", color: "white" }}>
            <td>Tertiary Dark</td>
            <td>
              <TertiaryButton testid={"Normal Tertiary"} dark>
                Normal
              </TertiaryButton>
            </td>
            <td>
              <TertiaryButton testid={"Small Tertiary"} smallSize dark>
                Small
              </TertiaryButton>
            </td>
            <td>
              <TertiaryButton testid={"Disabled Tertiary"} disabled dark>
                Disabled
              </TertiaryButton>
            </td>
          </tr>
        </tbody>
      </table>
    </ButtonSectionStyle>
  );
};

export default ButtonSection;
