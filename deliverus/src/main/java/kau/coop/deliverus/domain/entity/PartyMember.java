package kau.coop.deliverus.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import org.aspectj.weaver.ast.Or;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;

@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PartyMember {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long partyMemberId;
    private String nickname;

    @ManyToOne
    @JoinColumn(name="partyId")
    private Party party;

    @ElementCollection
    @Cascade(CascadeType.REMOVE)
    @CollectionTable(
            name="\"order\"",
            joinColumns = @JoinColumn(name = "partyMemberId")
    )
    private List<Order> order;

    private boolean isPayed;

    public void setPayed(boolean payed) {
        isPayed = payed;
    }

    public void setParty(Party party){
        this.party=party;
    }

    public void setOrder(List<Order> order){
        this.order=order;
    }
}
